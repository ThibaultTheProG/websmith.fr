import Form from "@/components/form";

export default function FormSection() {
  return (
    <div className="flex flex-col space-y-8 py-12">
      <div className="text-center space-y-4">
        <span className="text-yellow-dark">Contactez-nous</span>
        <h2 className="text-3xl font-bold">
          Discutons de votre projet
        </h2>
      </div>
      <Form />
      </div>
  );
}