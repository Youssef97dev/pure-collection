import Container from "@/components/Container";
import { PureProvider } from "../context/pureContext";

export default function Home() {
  return (
    <PureProvider>
      <Container />
    </PureProvider>
  );
}
