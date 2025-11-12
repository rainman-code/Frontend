const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Our Mission
        </h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We are dedicated to raising awareness about cancer prevention, early detection, 
            and treatment options. Our community provides emotional support, educational resources, 
            and a safe space for patients, survivors, and their families.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every day, we work to empower individuals with knowledge, connect them with resources, 
            and remind them that they are not alone in their journey. Together, we can make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About  