import React, { useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { BadgeCheck, Download, Edit, HeartPulse, Share2 } from 'lucide-react';

type CertificatePreviewProps = {
  userName: string;
  totalDonations: number;
  livesImpacted: number;
};

const CertificatePreview: React.FC<CertificatePreviewProps> = ({
  userName,
  totalDonations,
  livesImpacted,
}) => {
  return (
    <div className="relative mx-auto flex max-w-2xl flex-col items-center rounded-[32px] bg-gradient-to-r from-[#861657] via-[#b63277] to-[#ff6f91] p-[3px] shadow-xl">
      <div className="flex w-full flex-col items-center rounded-[28px] bg-white px-10 py-14 text-center">
        <span className="text-lg font-medium tracking-[0.35em] text-muted-foreground uppercase">Certificado de Doador Solidário</span>
        <div className="mt-8 text-4xl font-semibold text-neutral-900">{userName}</div>
        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-[#861657] to-[#ff6f91]">
            <HeartPulse className="h-12 w-12 text-white" />
          </div>
          <span className="text-lg font-medium text-[#861657]">LIFESYNC</span>
        </div>
        <p className="mt-10 max-w-md text-base font-medium text-muted-foreground">
          “Contribuiu com {totalDonations} doações, impactando {livesImpacted} vidas”
        </p>
      </div>
    </div>
  );
};

const Entrar: React.FC = () => {
  const [certificateOpen, setCertificateOpen] = useState(false);

  const user = useMemo(
    () => ({
      name: 'Dinoy Raj K',
      email: 'dinoyraj@gmail.com',
      phone: '+91 725094',
      zip: '682018',
      city: 'Kochi, Kerala',
      address: 'Kavalvally Rengumatham House, Kerala',
      bloodType: 'O+',
      memberSince: '2019',
      nextDonation: '15/12/2024',
      lastDonation: '11/10/2024',
      totalDonations: 320,
      donationsThisYear: 120,
      livesImpacted: 480,
    }),
    []
  );

  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://lifesync.org/entrar';
  const shareMessage = encodeURIComponent(
    `Sou doador ativo na LifeSync! Já realizei ${user.totalDonations} doações e impactei ${user.livesImpacted} vidas.`
  );

  const socialLinks = [
    {
      label: 'WhatsApp',
      accentClass: 'bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20',
      href: `https://api.whatsapp.com/send?text=${shareMessage}%20${encodeURIComponent(shareUrl)}`,
    },
    {
      label: 'Instagram',
      accentClass: 'bg-[#E1306C]/10 text-[#C13584] hover:bg-[#E1306C]/20',
      href: `https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      label: 'LinkedIn',
      accentClass: 'bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
  ];

  const donationHighlights = [
    { label: 'Doações no ano', value: user.donationsThisYear },
    { label: 'Total de doações', value: user.totalDonations },
    { label: 'Vidas impactadas', value: user.livesImpacted },
    { label: 'Última doação', value: user.lastDonation },
  ];

  const personalInfo = [
    { label: 'Nome Completo', value: user.name },
    { label: 'Email', value: user.email },
    { label: 'Cidade', value: user.city },
    { label: 'Telefone', value: user.phone },
    { label: 'CEP', value: user.zip },
    { label: 'Tipo Sanguíneo', value: user.bloodType },
    { label: 'Endereço', value: user.address },
    { label: 'Última Doação', value: user.lastDonation },
    { label: 'Próxima Doação', value: user.nextDonation },
  ];

  const handleShare = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadCertificate = () => {
    const printWindow = window.open('', '_blank', 'width=900,height=650');

    if (!printWindow) return;

    const certificateHtml = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charSet="utf-8" />
    <title>Certificado LifeSync</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: 'Poppins', Arial, sans-serif;
        background-color: #f7f7f7;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 32px;
        color: #1f1f1f;
      }
      .certificate {
        width: 900px;
        max-width: 100%;
        background: linear-gradient(135deg, #861657, #b63277, #ff6f91);
        padding: 3px;
        border-radius: 32px;
      }
      .certificate__inner {
        background: #ffffff;
        border-radius: 28px;
        padding: 80px 56px;
        text-align: center;
      }
      .certificate__title {
        letter-spacing: 0.35em;
        text-transform: uppercase;
        font-size: 18px;
        color: #666666;
        margin-bottom: 48px;
      }
      .certificate__name {
        font-size: 48px;
        font-weight: 600;
        margin-bottom: 56px;
      }
      .certificate__icon {
        width: 140px;
        height: 140px;
        margin: 0 auto;
        border-radius: 50%;
        background: linear-gradient(135deg, #861657, #ff6f91);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .certificate__icon svg {
        width: 68px;
        height: 68px;
        fill: none;
        stroke: #ffffff;
        stroke-width: 1.5;
      }
      .certificate__brand {
        margin-top: 24px;
        font-size: 18px;
        font-weight: 600;
        color: #861657;
      }
      .certificate__message {
        margin-top: 48px;
        font-size: 18px;
        font-weight: 500;
        color: #555555;
      }
    </style>
  </head>
  <body>
    <div class="certificate">
      <div class="certificate__inner">
        <div class="certificate__title">Certificado de Doador Solidário</div>
        <div class="certificate__name">${user.name}</div>
        <div class="certificate__icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21s-6.5-4.35-9.33-8.2C1.1 10.73.62 8.1 2.1 6.3c1.35-1.62 4-1.9 5.6-.28L12 10l4.3-3.98c1.6-1.62 4.25-1.34 5.6.28 1.48 1.8 1 4.43-.57 6.5C18.5 16.65 12 21 12 21z" />
          </svg>
        </div>
        <div class="certificate__brand">LIFESYNC</div>
        <div class="certificate__message">“Contribuiu com ${user.totalDonations} doações, impactando ${user.livesImpacted} vidas”</div>
      </div>
    </div>
    <script>
      window.addEventListener('load', () => {
        window.print();
      });
    </script>
  </body>
</html>`;

    printWindow.document.write(certificateHtml);
    printWindow.document.close();
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-6 md:pt-10">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium uppercase tracking-[0.35em] text-muted-foreground">Conta</span>
          <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">Bem-vindo de volta, {user.name}</h1>
          <p className="max-w-2xl text-base text-muted-foreground">
            Aqui você encontra os detalhes da sua jornada como doador LifeSync, com todas as informações atualizadas e seu certificado digital.
          </p>
        </div>

        <Card className="border-none bg-white/90 shadow-2xl">
          <CardHeader className="flex flex-col gap-6 border-b border-slate-100 pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#c41e3a]/10 text-3xl font-semibold text-[#c41e3a]">
                {user.name.charAt(0)}
              </div>
              <div className="space-y-1">
                <CardTitle className="text-3xl font-semibold text-neutral-900">{user.name}</CardTitle>
                <p className="text-sm text-muted-foreground">Doador ativo desde {user.memberSince}</p>
              </div>
            </div>
            <Button variant="outline" className="rounded-full border-2 border-neutral-900 px-6 text-neutral-900 hover:border-[#c41e3a] hover:bg-[#c41e3a] hover:text-white">
              <Edit className="h-4 w-4" />
              Editar Perfil
            </Button>
          </CardHeader>

          <CardContent className="grid gap-10 p-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-10">
              <section>
                <div className="mb-6 flex items-center gap-2 text-neutral-900">
                  <BadgeCheck className="h-5 w-5 text-[#c41e3a]" />
                  <h2 className="text-xl font-semibold">Dados do Doador</h2>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-5 text-sm text-neutral-700 sm:grid-cols-2">
                  {personalInfo.map((item) => (
                    <div key={item.label} className="flex flex-col">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</dt>
                      <dd className="mt-1 text-base font-medium text-neutral-900">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-neutral-900">Certificado Digital</h2>
                    <p className="text-sm text-muted-foreground">Gere e compartilhe seu certificado personalizado de doador solidário.</p>
                  </div>
                  <Dialog open={certificateOpen} onOpenChange={setCertificateOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="rounded-full bg-[#c41e3a] px-6 text-base font-semibold text-white shadow-lg hover:bg-[#a71830]">
                        <Share2 className="h-4 w-4" />
                        Gerar Certificado
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
                      <DialogHeader className="bg-white px-8 pt-8">
                        <DialogTitle className="text-2xl font-semibold text-neutral-900">Certificado Digital LifeSync</DialogTitle>
                        <p className="text-sm text-muted-foreground">
                          Visualize seu certificado abaixo. Clique em "Baixar PDF" para salvar ou compartilhar com sua rede.
                        </p>
                      </DialogHeader>
                      <div className="bg-white px-8 pb-8">
                        <CertificatePreview userName={user.name} totalDonations={user.totalDonations} livesImpacted={user.livesImpacted} />
                      </div>
                      <DialogFooter className="bg-white px-8 pb-8">
                        <Button onClick={handleDownloadCertificate} className="ml-auto inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 text-base font-medium text-white hover:bg-neutral-700">
                          <Download className="h-4 w-4" />
                          Baixar PDF
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <CertificatePreview userName={user.name} totalDonations={user.totalDonations} livesImpacted={user.livesImpacted} />
              </section>
            </div>

            <aside className="flex flex-col gap-8">
              <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900">Histórico de Doações</h3>
                <ul className="mt-4 space-y-4 text-sm">
                  {donationHighlights.map((item) => (
                    <li key={item.label} className="flex items-center justify-between rounded-xl bg-white/80 px-4 py-3 text-neutral-700 shadow">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-base font-semibold text-neutral-900">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900">Compartilhe sua conquista</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Inspire mais pessoas a doarem compartilhando sua jornada nas redes sociais.
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      variant="ghost"
                      onClick={() => handleShare(link.href)}
                      className={`justify-between rounded-full border border-transparent px-5 py-5 text-base font-semibold transition-colors ${link.accentClass}`}
                    >
                      <span>{link.label}</span>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </aside>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Entrar;
