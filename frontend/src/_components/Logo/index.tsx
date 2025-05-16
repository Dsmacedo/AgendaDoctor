import Link from "next/link";
import { Logotipo } from "./style";

export default function Logo() {
  return (
    <Link href="/">
      <span className="flex items-center">
        <Logotipo src="Agendadoctor.svg" alt="Logotipo" />
      </span>
    </Link>
  );
}
