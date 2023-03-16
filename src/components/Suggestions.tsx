type Props = {
    suggestions: any[];
};

export default function Suggestions({ suggestions }: Props) {
    return (
        <aside className="flex-col items-start justify-start hidden w-full px-4 py-2 border lg:flex bg-dark rounded-xl border-tertiary">
            <h2 className="text-lg font-medium text-neutral-200">
                Suggestions:
            </h2>
            <ul className="flex flex-col gap-2 w-fit">
                {suggestions.map((suggestion) => (
                    <li
                        onClick={() => {
                            window.location.href = `/search?q=${suggestion}&lang=en-US`;
                        }}
                        key={suggestion}
                        className="text-secondary hover:cursor-pointer hover:underline underline-offset-2"
                    >
                        • {suggestion}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
