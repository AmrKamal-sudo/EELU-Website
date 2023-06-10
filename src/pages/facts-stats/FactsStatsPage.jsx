
import FactsStatsHeader from './components/FactsStatsHeader/FactsStatsHeader.jsx';
import './FactsStatsPage.scss';
import { ImStatsDots } from 'react-icons/im';
import BarChart from './components/Charts/BarChart.jsx';
import PieChart from './components/Charts/PieChart.jsx';
import DoughnutChart from './components/Charts/DoughnutChart.jsx';
import LineChart from './components/Charts/LineChart.jsx';
const FactsStatsPage = () => {
    const chartBgColors = ['#061041', '#00376F', '#006094', '#008AAD', '#00B5B7', '#35DEB8'];
    const numberOfStdsPerYearData = {
        labels: ['2018', '2019', '2020',
            '2021', '2022', '2023'],
        datasets: [
            {
                label: 'عدد الطلاب المقيدين بالجامعة حسب السنين',
                backgroundColor: '#006094',
                data: [2000, 2500, 2500, 2800, 3000, 5000],
                borderWidth: 1
            }
        ]
    }
    const numberOfGradsPerYearData = {
        labels: ['2018', '2019', '2020',
            '2021', '2022', '2023'],
        datasets: [{
            label: 'عدد الخريجين حسب السنين',
            data: [2000, 2500, 2500, 2800, 3000, 5000],
            backgroundColor: chartBgColors,
            borderWidth: 1
        }]
    }
    const percentageOfTeachersAndStdsData = {
        labels: ['عدد الطلاب', 'أعضاء هيئة التدريس'],
        datasets: [{
            label: 'نسبة الطلاب والمعلمين',
            data: [2194, 120],
            backgroundColor: [
                '#00B5B7', '#061041'
            ],
            borderWidth: 1
        }]
    };
    const numberOfCenters = {
        labels: ['2018', '2019', '2020',
        '2021', '2022', '2023'],
        datasets: [{
          label: 'عدد المراكز',
          data: [4, 5, 7, 7, 10, 12],
          borderColor: ['#00B5B7'],
          borderWidth: 1
        }]
    };
    const numberOfStudies = {
        labels: ['2018', '2019', '2020',
        '2021', '2022', '2023'],
        datasets: [{
          label: 'عدد المشروعات البحثية ورسائل الماجستير',
          data: [0, 0, 1, 2, 4, 5],
          borderColor: ['#00B5B7'],
          borderWidth: 1
        }]
    };
      const numberOfGradsperCollege = {
        labels: ['Computer science', 'Business Administration', 'E-learning diploma'],
        datasets: [{
            label: 'عدد الخريجين حسب الكليات',
            data: [150, 79, 35],
            backgroundColor: [
                '#00376F', '#006094', '#008AAD'
            ],
            borderWidth: 1
        }]
    };
    const stdsServicesStats = {
        labels: ['عدد الخدمات المقدمة للطلاب', 'مدى رضا الطلاب عن الخدمة', 'عدد مستخدمين الخدمات الطلابية',
            'عدد الطلبات المقدمة'],
        datasets: [
            {
                label: 'احصائيات الخدمات الطلابية',
                backgroundColor: ['#061041', '#00376F', '#006094', '#008AAD'],
                data: [200, 500, 2000, 1000],
                borderWidth: 1
            }
        ]
    }
    const contEducationStats = {
        labels: ['عدد الكورسات المقدمة', 'عدد الطلاب المسجلين'],
        datasets: [
            {
                label: 'احصائيات التعليم المستمر',
                backgroundColor: ['#006094', '#008AAD'],
                data: [2000, 1000],
                borderWidth: 1
            }
        ]
    }
    return (
        <div className='facts-stats-page-container' style={{
            background: `url('${process.env.PUBLIC_URL}/images/facts-stats-header-bg.png') 0% 0%  no-repeat`
        }}>
            <FactsStatsHeader />
            <div className='facts-stats-page-container__content'>
                <h2 className='facts-stats-page-container__content_title'>
                    <span> احصائيات الجامعة المصيرية الإلكترونية </span>
                    <ImStatsDots />
                </h2>
                <div className='facts-stats-page-container__content_stats'>
                    <div className='facts-stats-page-container__content_stats__item'>
                        <h4>احصائيات عدد الطلاب المقيدين بالجامعة حسب السنين</h4>
                        <div className='facts-stats-page-container__content_stats__item-chart'>
                            <BarChart chartData={numberOfStdsPerYearData} />
                        </div>
                    </div>

                    <div className='facts-stats-page-container__content_stats__item'>
                        <h4>احصائيات عدد الخريجين لكل سنة</h4>
                        <div className='facts-stats-page-container__content_stats__item-chart'>
                            <BarChart chartData={numberOfGradsPerYearData} />
                        </div>
                    </div>
                    <div className='facts-stats-page-container__content_stats__item'>
                        <h4>احصائيات نسبة أعضاء هيئة التدريس والمعيدين للطلاب</h4>
                        <div className='facts-stats-page-container__content_stats__item-chart'>
                            <DoughnutChart chartData={percentageOfTeachersAndStdsData} />
                        </div>
                    </div>
                    <div className='facts-stats-page-container__content_stats__item'>
                        <h4>عدد المراكز</h4>
                        <div className='facts-stats-page-container__content_stats__item-chart'>
                            <LineChart chartData={numberOfCenters} />
                        </div>
                    </div>
                    <div className='facts-stats-page-container__content_stats__item'>
                        <h4>عدد المشروعات البحثية ورسائل الماجستير</h4>
                        <div className='facts-stats-page-container__content_stats__item-chart'>
                            <LineChart chartData={numberOfStudies} />
                        </div>
                    </div>
                    <div className='facts-stats-page-container__content_stats__item'>
                        <h4>احصائيات عدد الطلاب لكل كلية</h4>
                        <div className='facts-stats-page-container__content_stats__item-chart'>
                            <PieChart chartData={numberOfGradsperCollege} />
                        </div>
                    </div>
                    <div className='facts-stats-page-container__content_stats__item'>
                        <h4>احصائيات وحدة الخدمات الطلابية</h4>
                        <div className='facts-stats-page-container__content_stats__item-chart'>
                            <BarChart chartData={stdsServicesStats} />
                        </div>
                    </div>
                    <div className='facts-stats-page-container__content_stats__item'>
                        <h4>احصائيات قسم التعلم المستمر</h4>
                        <div className='facts-stats-page-container__content_stats__item-chart'>
                            <BarChart chartData={contEducationStats} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FactsStatsPage;