
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmailSignupForm from '@/components/EmailSignupForm';
import FeatureCard from '@/components/FeatureCard';
import AdvantageCard from '@/components/AdvantageCard';
import FAQItem from '@/components/FAQItem';
import { 
  Calendar, 
  Upload, 
  PenTool, 
  Hash, 
  MessageSquare, 
  Crop, 
  Users, 
  BarChart3, 
  Link, 
  Smartphone
} from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your all-in-one <span className="gradient-text">autopilot</span> for social content
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Schedule smarter, publish faster, grow everywhere with PostPilot's AI-powered social media management platform.
              </p>
              
              <div id="join" className="mb-8">
                <EmailSignupForm />
                <p className="text-sm text-gray-500 mt-3">
                  Join our exclusive waitlist for early access and special launch pricing.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center animate-float">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-300/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-2 rounded-3xl shadow-xl border border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80" 
                    alt="PostPilot Dashboard"
                    className="rounded-2xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Content Creators
            </h2>
            <p className="text-xl text-gray-600">
              PostPilot combines everything you need to manage your social media presence in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              title="Multi-Platform Scheduling" 
              description="Schedule posts across Instagram, Twitter, TikTok, LinkedIn, Facebook, Pinterest, YouTube Shorts, and Threads."
              icon={<Calendar className="h-6 w-6" />}
            />
            <FeatureCard 
              title="Bulk Upload + Calendar View" 
              description="Drag-and-drop content calendar with CSV bulk import and visual weekly/monthly planning."
              icon={<Upload className="h-6 w-6" />}
            />
            <FeatureCard 
              title="AI-Powered Post Generator" 
              description="Built-in AI that drafts content based on link, brand voice, or campaign goal."
              icon={<PenTool className="h-6 w-6" />}
            />
            <FeatureCard 
              title="Hashtag + Caption Library" 
              description="Save and reuse top-performing hashtags and captions for consistent branding."
              icon={<Hash className="h-6 w-6" />}
            />
            <FeatureCard 
              title="First Comment Scheduling" 
              description="Especially for Instagram and TikTok to boost reach and engagement."
              icon={<MessageSquare className="h-6 w-6" />}
            />
            <FeatureCard 
              title="Auto-Resize & Platform Preview" 
              description="Instantly adapts images/videos to each platform's spec with preview before posting."
              icon={<Crop className="h-6 w-6" />}
            />
            <FeatureCard 
              title="Team Collaboration" 
              description="Approvals, roles, comment threads on drafts like Figma or Notion style."
              icon={<Users className="h-6 w-6" />}
            />
            <FeatureCard 
              title="Analytics Dashboard" 
              description="Performance by platform, post, time of day with exportable reports."
              icon={<BarChart3 className="h-6 w-6" />}
            />
            <FeatureCard 
              title="Link-in-Bio Builder" 
              description="Custom mini landing page that matches your brand and drives traffic."
              icon={<Link className="h-6 w-6" />}
            />
            <FeatureCard 
              title="Mobile App + Chrome Extension" 
              description="Create, edit, and schedule content on the go or directly from browser."
              icon={<Smartphone className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>
      
      {/* Advantages Section */}
      <section id="advantages" className="py-20 section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">PostPilot</span>?
            </h2>
            <p className="text-xl text-gray-600">
              We've built PostPilot with a focus on affordability, flexibility, and powerful features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AdvantageCard 
              title="Lower Cost per Account" 
              description="Get more value with our affordable pricing structure."
              bufferComparison="Connect 10 social accounts for $15/month vs Buffer's 3 accounts for $6/month"
            />
            <AdvantageCard 
              title="Unlimited Scheduled Posts" 
              description="No monthly post limits even on the base plan."
              bufferComparison="Schedule as many posts as you need without hitting artificial limits"
            />
            <AdvantageCard 
              title="Affordable AI Add-On" 
              description="AI caption/image generation included or under $5/month extra."
              bufferComparison="AI features are premium add-ons or not available"
            />
            <AdvantageCard 
              title="Freemium Plan That Works" 
              description="Includes basic scheduling for up to 3 accounts, even for Reels/Shorts."
              bufferComparison="Free plan is extremely limited with no video posting"
            />
            <AdvantageCard 
              title="No Feature Gating by Tier" 
              description="All core features accessible on all paid plans."
              bufferComparison="Analytics and key features are hidden behind higher pricing tiers"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50 section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about PostPilot
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQItem 
              question="When will PostPilot be available?" 
              answer="We're currently in closed beta testing. Join our waitlist to be among the first to access PostPilot when we launch publicly in Q3 2025."
            />
            <FAQItem 
              question="Which social platforms does PostPilot support?" 
              answer="PostPilot supports Instagram, Twitter (X), TikTok, LinkedIn, Facebook, Pinterest, YouTube Shorts, and Threads. We're continuously adding new platforms based on user demand."
            />
            <FAQItem 
              question="How does the AI content generator work?" 
              answer="Our AI content generator analyzes your brand voice, post history, and campaign goals to suggest content. You can also provide a URL or topic, and the AI will create post drafts that you can edit before scheduling."
            />
            <FAQItem 
              question="Will there be a free plan available?" 
              answer="Yes! We'll offer a free plan that includes basic scheduling for up to 3 social accounts, including support for Reels and Shorts. This allows you to experience the core functionality before upgrading."
            />
            <FAQItem 
              question="How does PostPilot pricing compare to competitors?" 
              answer="PostPilot offers significantly more value compared to competitors. Our plans include more social accounts, unlimited scheduled posts, and affordable AI add-ons, resulting in lower overall costs for the same functionality."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl p-8 md:p-12 lg:p-16">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to take your social media on autopilot?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join our exclusive waitlist today and be the first to know when we launch.
              </p>
              
              <EmailSignupForm buttonText="Get Early Access" className="mx-auto" />
              <p className="text-sm text-white/70 mt-3">
                No credit card required. Early access members receive special launch pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
