import Form from "@/components/form";

export default function FormSection() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="text-center space-y-4">
        <span className="text-yellow-dark font-medium">Contactez-nous</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Discutons de votre projet
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Parlez-nous de vos besoins et nous vous proposerons une solution adaptée.
        </p>
      </div>
      <Form />
    </div>
  );
}