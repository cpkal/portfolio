export const slugify = (string) => {
    return string.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
};