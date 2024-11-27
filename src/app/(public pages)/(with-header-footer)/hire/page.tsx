import ViewJobPostNavigator from "@/components/pages/viewJobPost/ViewJobPostNavigator";
import Container from "@/components/shared/wrapper/Container";

const page = () => {
  return (
    <div className="px-5 md:px-[40px] relative pb-[50px] md:pb-[100px] 2xl:pb-[120px] pt-[130px] lg:pt-[149px]">
      <Container className="mx-auto">
        <ViewJobPostNavigator activeId={4} />
        <h1 className="text-center">Coming soon.</h1>
      </Container>
    </div>
  );
};

export default page;

// From hire page.
