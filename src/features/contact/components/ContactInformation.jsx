export function ContactInformation({ email, address }) {
  return (
    <div className="mt-3 space-y-1 text-sm text-text-secondary">
      <p>Email: {email}</p>
      {address && <p>Alamat: {address}</p>}
    </div>
  );
}
