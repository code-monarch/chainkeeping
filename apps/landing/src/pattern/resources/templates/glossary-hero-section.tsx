import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SearchInput from '@/pattern/common/molecules/search-input';
import GlossaryToggleGroup from '../organisms/glossary-toggle-group';
import LetterNavigation from '../molecules/letter-navigation';

const GlossaryHeroSection = () => {
  const { replace } = useRouter(); // Use replace instead of push
  const [search, setSearch] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');

  // Debounce effect to update the debouncedSearch state
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 2000);

    return () => {
      clearTimeout(handler); // Clear timeout if search changes
    };
  }, [search]);

  // Update the query parameter when debouncedSearch changes
  useEffect(() => {
    const url = new URL(window.location.href);
    if (debouncedSearch.trim()) {
      url.searchParams.set('search', debouncedSearch);
    } else {
      url.searchParams.delete('search');
    }
    replace(url.toString()); // Use replace to prevent scroll-to-top
  }, [debouncedSearch, replace]);

  return (
    <section className="bg-primary bg-pattern-bg-img bg-cover bg-center w-full h-fit lg:min-h-[484px]">
      <div className="w-full h-full flex flex-col items-center justify-start gap-y-8 pt-[69px] pb-[47px] px-[18px] lg:container">
        <div className="w-full max-w-[760px] flex flex-col gap-y-8">
          <div className="w-full flex flex-col gap-y-3">
            <h3 className="font-rubik font-bold text-4xl leading-[37.97px] lg:text-[2.75rem] text-white text-left lg:text-center">Glossary</h3>
            <p className="max-w-[339px] lg:max-w-[734px] text-white text-base text-left lg:text-center font-dmsans leading-[22px]">
              Get informed, A-Z of crypto, crytpo taxation and more.
            </p>
          </div>
          <SearchInput
            className="h-14"
            placeholder="Search terms..."
            value={search}
            onChange={(e) => setSearch(e?.target?.value)}
          />
        </div>
        <div className="w-full h-fit max-w-[855px] lg:min-w-[855px] lg:max-w-fit flex flex-col items-center gap-y-8">
          <GlossaryToggleGroup />
          <LetterNavigation />
        </div>
      </div>
    </section>
  );
};

export default GlossaryHeroSection;
