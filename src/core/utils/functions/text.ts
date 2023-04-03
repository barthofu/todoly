export const toPascalCase = (str: string) => {
    return str
        .split(/[-_]/)
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join('')
}