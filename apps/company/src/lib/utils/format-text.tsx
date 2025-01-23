export const formatTextWithBoldMarkers = (text: string) => {
    // Split the text by ** markers
    const parts = text.split('**')

    return parts.map((part, index) => {
        // Even indices are regular text, odd indices should be bold
        if (index % 2 === 1) {
            return <strong key={ index } className = "font-bold" > { part } </strong>
        }
        return part
    })
}

export const formatTextWithLinks = (text: string) => {
    // Split the text by spaces to identify words
    const parts = text.split(' ');

    return parts.map((part, index) => {
        // Check if the part starts with "https"
        if (part.startsWith('https')) {
            return <a key={index} href={part} className="text-red-500" target="_blank" rel="noopener noreferrer">{part}</a>;
        }
        return part + ' '; // Add space back for regular text
    });
}
