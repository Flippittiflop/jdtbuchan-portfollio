export default function Impressum() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      <p className="mb-4">
        According to § 5 TMG (German Telemedia Act):
      </p>
      <p className="mb-4">
        [Your Full Name]<br />
        [Your Street Address]<br />
        [Your City, Postal Code]<br />
        [Your Country]
      </p>
      <h2 className="text-2xl font-bold mt-6 mb-4">Contact</h2>
      <p className="mb-4">
        Phone: [Your Phone Number]<br />
        Email: [Your Email Address]
      </p>
      <p className="mt-6">
        Please note: This is a basic Impressum. Depending on your specific situation and the services you offer, you may need to include additional information to comply with German law.
      </p>
    </div>
  )
}