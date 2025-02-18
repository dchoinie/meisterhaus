import Container from "../custom_components/container";
import PageTitle from "../custom_components/pageTitle";
import SEO from "../custom_components/seo";
import { getRooms } from "@/lib/sanityClient";
import BookingInterface from "../custom_components/bookingInterface";

export default async function Book() {
  const rooms = await getRooms();

  return (
    <>
      <SEO title="Book" />
      <div className="pt-24">
        <Container>
          <PageTitle title="Book" path="/book" />
          <BookingInterface rooms={rooms} />
        </Container>
      </div>
    </>
  );
}
