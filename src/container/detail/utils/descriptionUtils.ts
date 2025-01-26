export const stripHtml = (html: string): string => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
};

export const truncateDescription = (description: string): string => {
    const sentences = description.split('.').slice(0, 3);
    return sentences.join('. ') + (sentences.length === 3 ? '.' : '');
};
