import { redirect } from "next/navigation";
import Navbar from "../components/navbar";

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
