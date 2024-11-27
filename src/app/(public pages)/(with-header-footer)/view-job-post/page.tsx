import ViewJobPostJobDetails from "@/components/pages/viewJobPost/ViewJobPostJobDetails";
import ViewJobPostNavigator from "@/components/pages/viewJobPost/ViewJobPostNavigator";
import Container from "@/components/shared/wrapper/Container";

const ViewJobPostPage = () => {
  return (
    <div className="px-5 md:px-[40px] relative pb-[50px] md:pb-[100px] 2xl:pb-[120px] pt-[130px] lg:pt-[149px]">
      <Container className="mx-auto">
        <ViewJobPostNavigator activeId={1} />
        <ViewJobPostJobDetails />
      </Container>
    </div>
  );
};

export default ViewJobPostPage;
