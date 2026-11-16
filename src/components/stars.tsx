


export function Stars({ rating }: { rating: number }) {
    return (
        <div className="flex text-3xl">
            {Array.from({ length: 5 }, (_, i) => {
                const percentage = Math.max(
                    0,
                    Math.min(1, rating - i)
                ) * 100;

                return (
                    <span
                        key={i}
                        style={{
                            background: `linear-gradient(to right, #e8d06f ${percentage}%, #F4F4F5 ${percentage}%)`,
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent"
                        }}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
}