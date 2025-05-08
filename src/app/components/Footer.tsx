// components/Footer.tsx
type FooterProps = {
    dictionary: { [key: string]: string };
};

export default function Footer({ dictionary }: FooterProps) {
    return (
        <footer className="bg-[var(--black)] text-[var(--white)] py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {dictionary.FooterRights}</p>
                <p className="mt-2">
                    {dictionary.FooterThanks}
                </p>
            </div>
        </footer>
    );
}