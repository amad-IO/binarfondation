import { ArrowRight, BookOpenText, CalendarRange, MessageSquareQuote } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ArticlesAndRecruitment from '../page-sections/ArticlesAndRecruitment';



const EducationPage = () => {
    return (
        <>
            <PageHeader
                className="bg-white pt-28 lg:pt-32 pb-8"
                eyebrow="Edukasi"
                title="Pusat Artikel & Agenda Seminar Edukatif"
            />
            <ArticlesAndRecruitment />
        </>
    );
};

export default EducationPage;
