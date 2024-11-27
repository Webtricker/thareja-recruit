import ActiveTabContent from "@/components/pages/allJobPost/ActiveTabContent";
import TopTabSwitcher from "@/components/pages/allJobPost/TopTabSwitcher";
import Container from "@/components/shared/wrapper/Container";

const AllJobPostPage = () => {
  return (
    <div className="px-5 md:px-[40px] relative pb-[50px] md:pb-[100px] 2xl:pb-[120px] pt-[130px] lg:pt-[149px]">
      <Container className="mx-auto">
        {/* ====== top contianer to show active stages =======*/}
        <TopTabSwitcher />

        {/* ====== active tab contents ======== */}

        <div className="w-full mt-10">
          <ActiveTabContent />
        </div>
      </Container>
    </div>
  );
};

export default AllJobPostPage;
