import InviteFreeLancersContent from "@/components/pages/inviteFreelancers/InviteFreeLancersContent";
import InviteFreelancersTabSwitcher from "@/components/pages/inviteFreelancers/InviteFreelancersTabSwitcher";
import ViewJobPostNavigator from "@/components/pages/viewJobPost/ViewJobPostNavigator";
import Container from "@/components/shared/wrapper/Container";

const InviteFreeLancerPage = () => {
  return (
    <div className="px-5 md:px-[40px] relative pb-[50px] md:pb-[100px] 2xl:pb-[120px] pt-[130px] lg:pt-[149px]">
      <Container className="mx-auto">
        <ViewJobPostNavigator activeId={2} />
        <InviteFreelancersTabSwitcher />
        <InviteFreeLancersContent />
      </Container>
    </div>
  );
};

export default InviteFreeLancerPage;
