import HireFreelancersContent from "@/components/pages/hireFreelancers/HireFreelancersContent";
import HireFreelancersTabSwitcher from "@/components/pages/hireFreelancers/HireFreelancersTabSwitcher";
import ViewJobPostNavigator from "@/components/pages/viewJobPost/ViewJobPostNavigator";
import Container from "@/components/shared/wrapper/Container";

const HireFreelancersPage = () => {
  return (
    <div className="px-5 md:px-[40px] relative pb-[50px] md:pb-[100px] 2xl:pb-[120px] pt-[130px] lg:pt-[149px]">
      <Container className="mx-auto">
        <ViewJobPostNavigator activeId={4} />
        <HireFreelancersTabSwitcher />
        <HireFreelancersContent />
      </Container>
    </div>
  );
};

export default HireFreelancersPage;
