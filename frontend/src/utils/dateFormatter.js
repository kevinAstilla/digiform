export function dateFormatter(value) {
    return new Date(value).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}

export function toISODate(date) {
    return new Date(date).toISOString().split('T')[0];
}