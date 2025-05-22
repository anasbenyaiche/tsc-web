import { Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Odoo from "@/pages/Odoo";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Login from "@/pages/admin/Login";
import Dashboard from "@/pages/admin/Dashboard";
import Posts from "@/pages/admin/posts/Posts";
import PostEditor from "@/pages/admin/posts/PostEditor";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { queryClient } from "./lib/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/odoo" element={<Odoo />} />
              <Route path="/team" element={<Team />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              
              {/* Admin routes */}
              <Route path="/admin/login" element={<Login />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              >
                <Route path="dashboard" element={<div>Dashboard Overview</div>} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/new" element={<PostEditor />} />
                <Route path="posts/:id/edit" element={<PostEditor />} />
                <Route path="categories" element={<div>Manage Categories</div>} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
