import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Seo } from '@/components/Seo';

const LandingPage = lazy(() => import('@/pages/Landing'));
const EnrollPage = lazy(() => import('@/pages/Enroll'));
const CoursePage = lazy(() => import('@/pages/Course'));
const ModulePage = lazy(() => import('@/pages/Module'));
const LessonPage = lazy(() => import('@/pages/Lesson'));
const CertificatePage = lazy(() => import('@/pages/Certificate'));
const StateNavigatorPage = lazy(() => import('@/pages/StateNavigator'));
const RoadmapPage = lazy(() => import('@/pages/Roadmap'));
const FaqPage = lazy(() => import('@/pages/Faq'));
const AboutPage = lazy(() => import('@/pages/About'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const TermsPage = lazy(() => import('@/pages/Terms'));
const PrivacyPage = lazy(() => import('@/pages/Privacy'));
const DisclaimerPage = lazy(() => import('@/pages/Disclaimer'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

function PageFallback() {
  return (
    <div className="container-page flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-forest-200 border-t-forest-600" />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageFallback />}>
              <LandingPage />
            </Suspense>
          }
        />
        <Route
          path="/enroll"
          element={
            <Suspense fallback={<PageFallback />}>
              <EnrollPage />
            </Suspense>
          }
        />
        <Route
          path="/course"
          element={
            <Suspense fallback={<PageFallback />}>
              <CoursePage />
            </Suspense>
          }
        />
        <Route
          path="/course/:moduleId"
          element={
            <Suspense fallback={<PageFallback />}>
              <ModulePage />
            </Suspense>
          }
        />
        <Route
          path="/course/:moduleId/:lessonId"
          element={
            <Suspense fallback={<PageFallback />}>
              <LessonPage />
            </Suspense>
          }
        />
        <Route
          path="/state-navigator"
          element={
            <Suspense fallback={<PageFallback />}>
              <StateNavigatorPage />
            </Suspense>
          }
        />
        <Route
          path="/roadmap"
          element={
            <Suspense fallback={<PageFallback />}>
              <RoadmapPage />
            </Suspense>
          }
        />
        <Route
          path="/certificate"
          element={
            <Suspense fallback={<PageFallback />}>
              <CertificatePage />
            </Suspense>
          }
        />
        <Route
          path="/faq"
          element={
            <Suspense fallback={<PageFallback />}>
              <FaqPage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<PageFallback />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<PageFallback />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="/terms"
          element={
            <Suspense fallback={<PageFallback />}>
              <TermsPage />
            </Suspense>
          }
        />
        <Route
          path="/privacy"
          element={
            <Suspense fallback={<PageFallback />}>
              <PrivacyPage />
            </Suspense>
          }
        />
        <Route
          path="/disclaimer"
          element={
            <Suspense fallback={<PageFallback />}>
              <DisclaimerPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageFallback />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
