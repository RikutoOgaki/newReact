import { devIndicatorServerState } from "next/dist/server/dev/dev-indicator-server-state";
import Image from "next/image";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button />
    </div>
  );
}
