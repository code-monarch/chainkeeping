export const formatTextWithBoldMarkers = (text: string) => {
    // Split the text by ** markers
    const parts = text.split('**')

    return parts.map((part, idx) => {
        // Even indices are regular text, odd indices should be bold
        if (idx % 2 === 1) {
            return <strong key={ idx } className = "font-bold" > { part } </strong>
        }
        return part
    })
}

export const formatTextWithLinks = (text: string) => {
    // Split the text by spaces to identify words
    const parts = text.split(' ');

    return parts.map((part, idx) => {
        // Check if the part starts with "https"
        if (part.startsWith('https')) {
            return <a key={idx} href={part} className="text-red-500" target="_blank" rel="noopener noreferrer">{part}</a>;
        }
        return part + ' '; // Add space back for regular text
    });
}
