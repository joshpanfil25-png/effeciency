import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import michelle from "@/versionB/assets/team/michelle.jpg";
import marci from "@/versionB/assets/team/marci.jpg";
import trista from "@/versionB/assets/team/trista.jpg";
import roz from "@/versionB/assets/team/roz.jpg";
import melanie from "@/versionB/assets/team/melanie.jpg";
import jordan from "@/versionB/assets/team/jordan.png";
import jessica from "@/versionB/assets/team/jessica.jpg";
import megan from "@/versionB/assets/team/megan.jpg";
import suzanne from "@/versionB/assets/team/suzanne.jpg";
import amanda from "@/versionB/assets/team/amanda.jpg";
import laura from "@/versionB/assets/team/laura.jpg";
import amy from "@/versionB/assets/team/amy.jpg";

const team = [
  {
    name: "Michelle Marlo",
    role: "President, Chief Client Officer",
    img: michelle,
    bio: "Michelle serves as President and Chief Client Officer of Efficiency Media, a role she assumed in January 2026 following the agency's transition to employee ownership. In this capacity, she leads the agency's strategic vision while championing the core values established by founder Amy: exceptional client commitment balanced with meaningful work-life balance for employees. Michelle's leadership spans both the strategic direction of the agency and the deep client relationships that have been the foundation of Efficiency Media's success. Her expertise in driving innovative media strategies across traditional and digital platforms has positioned the agency as a trusted partner for healthcare, retail, financial services, and educational institutions.\n\nSince joining Efficiency Media in 2012, Michelle has brought a distinctive perspective to the agency, with comprehensive expertise spanning both media planning and buying for local and national campaigns. Her strategic approach starts with a deep understanding of client’s business and goals combined with market research, competitive analysis, and evolving media consumption patterns to deliver measurable results for clients. With over 20 years of experience in media planning, buying, and account management, Michelle's insights and client-first philosophy continue to drive growth and innovation across every account she touches.",
  },
  {
    name: "Marci Crane",
    role: "President, Client Services and Linear & Streaming Platforms",
    img: marci,
    bio: "Marci is a media industry veteran with over 30 years of experience. She has worked at both large agencies, including J. Walter Thompson and Starcom, as well as boutique firms such as GRP Media, Two X Four, and now Efficiency Media. Throughout her career, she has serviced a diverse range of clients across industries including automotive, pharmaceutical, financial services, quick-service restaurants, professional sports, tourism, and legal. Her client experience includes brands such as Ford Motor Company, Lexus, Toyota, Fox Movie Studios, the Chicago White Sox, Northern Trust, Amita Health, and Warner Lambert. With this breadth of experience, Marci is a highly skilled negotiator who understands the importance of delivering superior customer service to her clients.",
  },
  {
    name: "Trista Countryman",
    role: "Chief Financial & Operations Officer",
    img: trista,
    bio: "Trista’s career has evolved alongside the media landscape. With a foundation in hands-on media execution, she brings a unique, media-informed perspective to agency operations and finance—where strategy, performance, and efficiency intersect. Today, Trista oversees financial management, operational strategy, and internal systems at the agency, bridging the gap between client goals and agency execution. Known for her attention to detail and thoughtful decision making, she plays a critical role in supporting long-term success for both clients and the internal team.",
  },
  {
    name: "Roz-Linn Finn",
    role: "Executive Digital Marketing Strategy & Technology",
    img: roz,
    bio: "Roz-Linn joins Efficiency Media with over 10 years of proven success in driving growth through the strategic integration of digital media and marketing technology. With a career defined by leading large-scale digital transformations, she specializes in auditing MarTech infrastructure and implementing data-driven strategies that bridge the gap between technical operations and customer acquisition. Before joining the team, Roz-Linn served as VP of Marketing for U.S. Waterproofing, where she centralized marketing efforts across multiple brands and built a high-performing division from the ground up. Her extensive background includes leadership roles at Jon-Don, where she spearheaded a complete overhaul of marketing technology to drive significant revenue growth, and Navistar, Inc., where she managed digital strategy across a global brand portfolio. She also brings valuable agency experience from Lever Interactive and Mindstream Media, servicing national brands such as Phillips Lifeline, Beltone, Northwestern College, and Sherwin Williams. An expert in SEO, SEM, and conversion rate optimization, Roz-Linn is passionate about using behavioral data to streamline the customer journey. Her innovative approach to digital lead tracking and UX was recognized in 2019 when she received the Women of Femme Award for excellence in digital transformation. At Efficiency Media, Roz-Linn focuses on scaling client growth by ensuring their digital ecosystems are both technically sound and strategically aligned with their business goals.",
  },
  {
    name: "Melanie Ivanov",
    role: "VP, Director of Media Planning",
    img: melanie,
    bio: "Melanie brings more than two decades of media experience to Efficiency Media, where she has been a valued team member for the past 10 years. Her background includes over 13 years at an agency in downtown Chicago, where she developed a strong foundation in both national and local media planning and buying. Melanie offers a unique perspective through her hands-on experience across the full media lifecycle, combining strategic planning leadership with practical buying expertise. She has planned and executed media strategies across more than 125 DMAs nationwide, providing deep insight into how national objectives translate at the local market level. She brings extensive healthcare media expertise, having worked with numerous hospitals and medical clients for 25 years. In addition to healthcare, she has experience across various restaurant, retail, financial, education, B2B, home improvement, and consumer packaged goods clients giving her a well-rounded understanding of diverse business categories and audience needs.",
  },
  {
    name: "Jordan Louis",
    role: "Paid Search Manager",
    img: jordan,
    bio: "Jordan is a digital marketing leader with ten years of agency experience creating, executing, and optimizing innovative marketing strategies across online channels, but found her \"home\" in SEM. She has successfully managed and scaled campaigns in multiple verticals, including e-commerce, sports, healthcare, finance, and transportation. She is passionate about staying ahead of industry trends and continuously refining strategies to meet the ever-changing needs of the digital ad world. Outside of work, she enjoys sunset boat rides with her dog Marshall and reading a good book with her cat Theodore.",
  },
  {
    name: "Jessica Rhea",
    role: "Manager of Media Planning & Buying",
    img: jessica,
    bio: "Jessica brings decades of media planning and buying experience to Efficiency Media, with a strong focus on local and regional media strategy grounded in data, performance measurement, and disciplined negotiation. In a previous role at RPM, she led media research and planning while managing negotiations across multiple accounts, overseeing budgets ranging from modest local investments to multi-million-dollar campaigns, consistently driving efficiency, reach, and cost-effective results. Jessica began her career at Foot, Cone & Belding in Chicago as an assistant media planner on national accounts, where she built a strong foundation in large-scale media strategy, analytics, and cross-market coordination—skills that continue to shape her practical, collaborative, and results-driven approach today. Throughout her career, Jessica has specialized in broadcast, print and out-of-home buying, delivering market-level strategies that balance brand goals with measurable outcomes—optimizing CPMs, improving market coverage, and maximizing frequency within budget. She has executed campaigns for nationally recognized brands including Gatorade, Kraft Pizza Company, Horseshoe and Harrah’s Casinos, Tier II and Tier III automotive clients, White Hen, 7-Eleven, and the Field Museum, tailoring each plan to the performance dynamics of individual markets and campaign goals.",
  },
  {
    name: "Megan Michalak",
    role: "Integrated Media Buyer",
    img: megan,
    bio: "Megan brings over a decade of industry experience to Efficiency Media. In her most recent role as Account Director at NSA Media Group, she collaborated with clients and agencies to develop integrated local print and digital strategies aimed at reaching consumers at key moments. Megan has worked with a diverse array of clients, including national grocery chains, financial services, healthcare systems, and quick-service restaurants. Throughout her career, she has honed her skills to deeply understand the client's perspective, ensuring clear alignment with project objectives and the delivery of successful campaigns.",
  },
  {
    name: "Suzanne Racz",
    role: "Senior Media Buyer",
    img: suzanne,
    bio: "Suzanne joins Efficiency Media with 20+ years of experience in the media buying industry. She has predominantly worked in large agencies such as PHD, Zenith, & GroupM where she handled markets of all sizes. Suzanne has experience buying for a wide variety of clients in all major categories such as American Family Insurance, AT&T, Ikea, John Deere, SC Johnson, Universal Pictures, Chase Bank and General Mills. Her automotive roster includes Jaguar, Land Rover, Volvo, Toyota, Lexus, Dodge/Chrysler/Jeep, & Mercedes. Suzanne's focus is to deliver accurate media schedules going above and beyond to produce quality results. She is a fair negotiator who is committed to achieving the individual advertising goals of each client, maximizing return on investment.",
  },
  {
    name: "Amanda Procter",
    role: "Traffic Manager / Media Buyer",
    img: amanda,
    bio: "Amanda is a dynamic marketing and media strategist with a rich background helping advertisers succeed. She was previously Marketing Director in the home improvement industry, placing TV, radio, print, event advertising and more. Afterward, she continued her media acumen as a Media Director, specializing in Tier 3 automotive media placement. Most recently, she managed independent-owned agency and advertiser accounts at Comscore, turning data into meaningful strategies that empowered client growth. Known for her love of Excel (yes, really!) and a knack for uncovering insights, Amanda blends analytical rigor with a collaborative spirit. She thrives on helping clients exceed expectations—and has fun doing it.",
  },
  {
    name: "Laura Liden",
    role: "Billing Coordinator",
    img: laura,
    bio: "With over 13 years of industry-leading experience, Laura serves as the Billing Coordinator at Efficiency Media. Her expertise is rooted in her previous tenure as a Media and Traffic Coordinator for SPM Marketing and Communications, allowing her to seamlessly integrate logistics and media strategy into her current financial operations. At Efficiency Media, Laura plays a pivotal role in streamlining invoicing workflows and maintaining strict financial integrity across a diverse portfolio of client accounts.",
  },
  {
    name: "Amy Abrahams",
    role: "Founder",
    img: amy,
    bio: "Efficiency Media was founded in April 2007 by Amy Abrahams, whose 12 years of combined experience in selling media and managing radio sales teams created the foundation of our agency. Amy's \"insider knowledge\" of the media world and her commitment to exceptional client service balanced with meaningful work-life balance became the cornerstones of Efficiency Media. In January 2026, Amy retired and transitioned the agency to employee ownership, ensuring that these core values would continue to guide our work—carrying forward Amy's legacy while building an exciting future together.",
  },
];

const EXCERPT_LENGTH = 80;

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  return (
    <section id="team" className="py-24 bg-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-teal font-medium text-sm tracking-widest uppercase mb-3">
            Our People
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Meet the Team
          </h2>
          <div className="w-16 h-1 bg-teal mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member, i) => {
            const excerpt =
              member.bio.length > EXCERPT_LENGTH
                ? member.bio.slice(0, EXCERPT_LENGTH).trimEnd() + "…"
                : member.bio;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1, duration: 0.5 }}
                onClick={() => setSelectedMember(member)}
                className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-navy text-lg">
                    {member.name}
                  </h3>
                  <p className="text-teal text-sm font-medium mt-1">{member.role}</p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                    {excerpt}
                  </p>
                  <span className="text-teal text-xs font-medium mt-2 inline-block group-hover:underline">
                    Read more →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full bio modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="grid gap-0 md:grid-cols-[minmax(240px,320px)_1fr]">
                <div className="bg-muted/40 flex items-center justify-center p-6 md:p-8">
                  <img
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    className="w-full max-w-[240px] md:max-w-[280px] h-auto object-contain rounded-xl shadow-sm"
                  />
                </div>
                <div className="relative p-6 md:p-8">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-navy/70 text-white flex items-center justify-center hover:bg-navy transition-colors"
                  >
                    <X size={18} />
                  </button>
                  <div className="pr-12">
                    <h3 className="font-display font-bold text-navy text-xl md:text-2xl">
                      {selectedMember.name}
                    </h3>
                    <p className="text-teal text-sm font-medium mt-1">{selectedMember.role}</p>
                    <p className="text-muted-foreground text-sm md:text-base mt-4 leading-relaxed whitespace-pre-line break-words">
                      {selectedMember.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
