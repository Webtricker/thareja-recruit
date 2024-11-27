import PageContent from "@/components/pages/directContacts/PageContent";
import Container from "@/components/shared/wrapper/Container";

const DirectContactsPage = () => {
  return (
    <div className="px-5 md:px-[40px] text-[#30353E] w-full relative pt-[130px] lg:pt-[169px]">
      <Container className="mx-auto !max-w-[1518px] h-full flex flex-col">
        <PageContent />
      </Container>
    </div>
  );
};

export default DirectContactsPage;