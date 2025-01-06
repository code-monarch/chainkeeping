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