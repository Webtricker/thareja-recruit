import ReviewProposalsContent from "@/components/pages/reviewProposals/ReviewProposalsContent";
import ReviewProposalsTabSwitcher from "@/components/pages/reviewProposals/ReviewProposalsTabSwitcher";
import ViewJobPostNavigator from "@/components/pages/viewJobPost/ViewJobPostNavigator";
import Container from "@/components/shared/wrapper/Container";
const ReviewProposalsPage = () => {
  return (
    <div className="px-5 md:px-[40px] relative pb-[50px] md:pb-[100px] 2xl:pb-[120px] pt-[130px] lg:pt-[149px]">
      <Container className="mx-auto">
        <ViewJobPostNavigator activeId={3} />
        <ReviewProposalsTabSwitcher />
        <ReviewProposalsContent />
      </Container>
    </div>
  );
};

export default ReviewProposalsPage;
