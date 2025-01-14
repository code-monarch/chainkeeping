import React, { ReactElement, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { cryptoGlossary } from '@/lib/data/crypto-glossary';
import { cryptoTaxGlossary } from '@/lib/data/crypto-tax-glossary';
import { GlossarySection } from '@/pattern/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@chainkeeping/ui';

const GlossaryTemp = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    const [selectedLetter, setSelectedLetter] = useState("");

    useEffect(() => {
        const currentHash = window.location.hash.slice(1);
        setSelectedLetter(currentHash);

        const handleHashChange = () => {
            setSelectedLetter(window.location.hash.slice(1));
        };

        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    const [glossary, setGlossary] = useState<{
        [key: string]: {
            question: string;
            answer: string;
        }[]
    }[]>([]);
    const [filteredGlossary, setFilteredGlossary] = useState<{
        [key: string]: {
            question: string;
            answer: string;
        }[]
    }[]>([]);
    const currentGlossary = useSelector((state: RootState) => state.glossary.glossary);

    // Helper function to merge glossaries by letter
    const mergeGlossariesByLetter = (glossaries: any[]) => {
        const mergedSections: { [key: string]: any[] } = {};

        glossaries.forEach(glossaryObj => {
            Object.entries(glossaryObj).forEach(([sectionKey, items]) => {
                // Group items by their first letter
                (items as any[]).forEach(item => {
                    const firstLetter = item.question.charAt(0).toUpperCase();
                    if (!mergedSections[firstLetter]) {
                        mergedSections[firstLetter] = [];
                    }
                    mergedSections[firstLetter].push(item);
                });
            });
        });

        // Sort items within each section
        Object.keys(mergedSections).forEach(key => {
            mergedSections[key].sort((a, b) =>
                a.question.localeCompare(b.question)
            );
        });

        // Convert to array format and sort sections alphabetically
        const sortedSections = Object.entries(mergedSections)
            .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
            .reduce((acc, [key, value]) => {
                const obj: { [key: string]: any[] } = {};
                obj[key] = value;
                acc.push(obj);
                return acc;
            }, [] as { [key: string]: any[] }[]);

        return sortedSections;
    };

    useEffect(() => {
        if (currentGlossary) {
            switch (currentGlossary) {
                case 'all': {
                    // Flatten and merge both glossaries
                    const mergedGlossary = mergeGlossariesByLetter([
                        ...cryptoGlossary,
                        ...cryptoTaxGlossary
                    ]);
                    setGlossary(mergedGlossary);
                    break;
                }
                case 'crypto-terms':
                    setGlossary(cryptoGlossary);
                    break;
                case 'tax-terms':
                    setGlossary(cryptoTaxGlossary);
                    break;
                default:
                    setGlossary(cryptoGlossary);
            }
        }
    }, [currentGlossary]);

    useEffect(() => {
        let filtered = [...glossary]

        if (search?.trim()) {
            const searchTerm = search.toLowerCase()
            filtered = filtered.map((section) => {
                const filteredSection: GlossarySection = {}

                Object.entries(section).forEach(([key, items]) => {
                    const filteredItems = items.filter((item) =>
                        item.question.toLowerCase().includes(searchTerm) ||
                        item.answer.toLowerCase().includes(searchTerm)
                    )

                    if (filteredItems.length > 0) {
                        filteredSection[key] = filteredItems
                    }
                })

                return filteredSection
            })
        }

        if (selectedLetter) {
            filtered = filtered.map((section) => {
                const filteredSection: GlossarySection = {}

                Object.entries(section).forEach(([key, items]) => {
                    if (selectedLetter === '#') {
                        const filteredItems = items.filter((item) =>
                            /^\d/.test(item.question)
                        )
                        if (filteredItems.length > 0) {
                            filteredSection[key] = filteredItems
                        }
                    } else {
                        const filteredItems = items.filter((item) =>
                            item.question.toUpperCase().startsWith(selectedLetter)
                        )
                        if (filteredItems.length > 0) {
                            filteredSection[key] = filteredItems
                        }
                    }
                })

                return filteredSection
            })
        }

        filtered = filtered.filter((section) => Object.keys(section).length > 0)

        setFilteredGlossary(filtered)
    }, [search, selectedLetter, glossary])

    return (
        <div className='w-full h-fit lg:min-h-[920px] flex flex-col items-center justify-start px-[18px] lg:container'>
            <div className='w-full h-full flex flex-col items-center'>
                {filteredGlossary.length > 0 ? (
                    filteredGlossary.map((section, sectionIndex) => (
                        <Accordion key={sectionIndex} type="single" collapsible className="w-full max-w-[896px] mb-8">
                            {Object.entries(section).map(([key, items]) => (
                                <AccordionItem key={key} value={key} className='w-full border-none'>
                                    <AccordionTrigger className="h-[65px] lg:h-[86px] text-[56px] text-secondary font-rubik font-medium p-2 border rounded-[8px]">
                                        <span className="font-rubik font-medium text-4xl lg:text-[56px] text-transparent [-webkit-text-stroke:1px_#D82E2E] leading-[66.36px]">{key}</span>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="w-full flex flex-col gap-2">
                                            {items.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="font-rubik py-4 transition-all duration-200 ease-in-out"
                                                >
                                                    <h3 className="text-2xl font-rubik font-medium mb-2">{item.question}</h3>
                                                    <p className="text-base text-[hsla(215,23%,40%,1)] font-dmsans">{item.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    ))
                ) : (
                    <div className="w-full text-center text-xl font-medium text-foreground">
                        No results found
                    </div>
                )}
            </div>
        </div>
    );
};

export default GlossaryTemp;

