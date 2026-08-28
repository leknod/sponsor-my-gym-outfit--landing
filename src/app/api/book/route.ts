import { NextResponse } from "next/server";
import { Resend } from "resend";
import { spots } from "../../data/spots";

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT_EMAIL = "kramleknod@gmail.com";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const brand = formData.get("brand") as string | null;
    const website = formData.get("website") as string | null;
    const email = formData.get("email") as string | null;
    const spotId = formData.get("spotId") as string | null;
    const logoFile = formData.get("logo") as File | null;

    // Validate required fields
    if (!brand || !email || !spotId) {
      return NextResponse.json(
        { error: "Brand name, email, and spot are required." },
        { status: 400 }
      );
    }

    // Find the spot
    const spot = spots.find((s) => s.id === spotId);
    if (!spot) {
      return NextResponse.json({ error: "Invalid spot." }, { status: 400 });
    }

    // Prepare logo attachment if provided
    const attachments: { filename: string; content: Buffer }[] = [];
    if (logoFile && logoFile.size > 0) {
      const arrayBuffer = await logoFile.arrayBuffer();
      attachments.push({
        filename: logoFile.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    // Send email via Resend
    const { error: resendError } = await resend.emails.send({
      from: "Sponsor My Gym Outfit <hello@sponsormygymoutfit.com>",
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `🏋️ New booking request: ${spot.label} — ${brand}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1d1d1f;">New Sponsorship Booking Request</h2>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr>
              <td style="padding: 8px 0; color: #6e6e73; width: 140px;">Spot</td>
              <td style="padding: 8px 0; color: #1d1d1f; font-weight: 600;">${spot.label}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6e6e73;">Price</td>
              <td style="padding: 8px 0; color: #1d1d1f; font-weight: 600;">€${spot.price}/month</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6e6e73;">Brand</td>
              <td style="padding: 8px 0; color: #1d1d1f;">${brand}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6e6e73;">Website</td>
              <td style="padding: 8px 0; color: #1d1d1f;">
                ${website ? `<a href="${website}" style="color: #0071e3;">${website}</a>` : "—"}
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6e6e73;">Email</td>
              <td style="padding: 8px 0; color: #1d1d1f;">
                <a href="mailto:${email}" style="color: #0071e3;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6e6e73;">Logo</td>
              <td style="padding: 8px 0; color: #1d1d1f;">${logoFile && logoFile.size > 0 ? "✅ Attached" : "❌ Not provided"}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          <p style="font-size: 13px; color: #6e6e73;">
            This booking request was submitted from sponsormygymoutfit.com. The customer will be redirected to Stripe to complete payment.
          </p>
        </div>
      `,
      attachments,
    });

    if (resendError) {
      console.error("Resend error:", resendError);
      return NextResponse.json(
        { error: "Failed to send booking email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      stripeLink: spot.stripeLink,
    });
  } catch (err) {
    console.error("Booking error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
