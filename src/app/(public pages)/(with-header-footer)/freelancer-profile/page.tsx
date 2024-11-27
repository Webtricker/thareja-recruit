import Container from "@/components/shared/wrapper/Container";
import ProfileInfo from "../../../../components/pages/freelancerProfile/ProfileInfo";

const FreelancerProfilePage = () => {
  return (
    <div className="px-5 md:px-[40px] relative pb-[50px] md:pb-[100px] 2xl:pb-[120px] pt-[130px] lg:pt-[149px]">
      <Container className="mx-auto">
        <ProfileInfo />
      </Container>
    </div>
  );
};

export default FreelancerProfilePage;
