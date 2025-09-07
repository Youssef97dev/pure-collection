import Container from "@/components/Container";
import { PureProvider } from "@/context/PureHouseContext";

export default function Home() {
  return (
    <PureProvider>
      <Container />
    </PureProvider>
  );
}
