type TMods = Record<string, boolean | string>;

export function classNames(cls: string, mods: TMods, additional: string[]): string {
    return [
        cls,
        ...additional.filter(className => Boolean(className)),
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}