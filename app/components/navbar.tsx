import MainNav from "./mainNav";

export default function NavBar() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4 gap-4">
                RSS HOME
                <MainNav />
                <div>
                    Account 
                </div>
            </div>
        </div>
    );
}