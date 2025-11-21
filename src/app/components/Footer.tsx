type FooterProps = {
    dictionary: { [key: string]: string };
};

export default function Footer({ dictionary }: FooterProps) {
    return (
        <footer className="bg-[var(--white)] text-[var(--black)] py-6">
            <div className="flex text-center">
                <div>
                    
                </div>
                <p>&copy; {dictionary.FooterRights}</p>
                <p className="mt-2">
                    {dictionary.FooterThanks}
                </p>
            </div>
        </footer>
    );
}