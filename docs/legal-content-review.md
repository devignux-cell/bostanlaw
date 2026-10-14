# Legal content review before publication

This implementation is a review draft. Bostan Law counsel must approve the document's public release, the website disclaimer, the contact-form warning, and all translations before production deployment. The site has not been deployed by this task.

## Original accident letter

- Source: `public/Police Report Letter To New Potential Clients.docx`. Its SHA-256 is `73c9787e4af8dc08a2ede33b8fad79cd4057fc0ab74c9245fcf4694295c4e393` before and after conversion. Keep this file unchanged.
- Browser copy: `public/documents/bostan-law-accident-information.pdf`, exported from the source DOCX with LibreOffice. Both pages were rendered and visually inspected. The logo, letter body, date, phone and fax information, attorney advertising notice, photograph, and signature are visible. The PDF is not a rewritten or translated version.
- The dialog displays two page images rendered from that PDF because the in-app browser did not render an embedded PDF. The images preserve the PDF page appearance; the dialog also links to the English PDF for opening and downloading.
- The letter says that the recipient was recently involved in an accident and includes a direct cell phone number for the claims manager. Counsel should decide whether a solicitation letter with this wording and contact detail is suitable for general public access. The resource UI identifies it as an informational letter, not a police report, official record, personalized assessment, or legal advice for the current visitor.
- Counsel should verify the letter's factual and legal statements, including PIP limits, medical-bill handling, lost wages, the tort threshold, and filing deadlines, as of the date of public release. No text was changed during conversion.
- If exact Microsoft Word print fidelity is legally required, compare the PDF to an attorney-approved PDF exported from Word before deployment. LibreOffice conversion preserved the visible content and two-page order in our review, but different office renderers can produce small layout differences.

## Website disclaimer and intake warning

- The English disclaimer and short contact-form warning follow the supplied draft. Counsel should confirm wording about legal advice, when representation begins, confidentiality, outcome statements, and attorney advertising.
- A warning cannot by itself determine whether prospective-client duties arise. The firm should review its actual intake process and handling of information submitted through the current `mailto:` contact flow. The site has no Resend integration or server intake route.
- Spanish, Santiago-variety Kriolu, Haitian Creole, Russian, and French text in `src/i18n/legal.ts` are complete draft translations. Qualified legal/native-language reviewers should verify terminology, tone, and consistency with Massachusetts law. The original PDF remains English in every locale.
- Review the claims already present elsewhere on the site, including outcome and fee claims, alongside the new disclaimer; a general disclaimer does not cure a misleading specific statement.

## Massachusetts authority for counsel's review

- [Rule 7.1 — communications concerning a lawyer's services](https://www.mass.gov/supreme-judicial-court-rules/rules-of-professional-conduct-rule-71-communications-concerning-a-lawyers-services): review accuracy and potentially misleading omissions in the site and letter.
- [Rule 7.2 — communications concerning a lawyer's services, specific rules](https://www.mass.gov/supreme-judicial-court-rules/rules-of-professional-conduct-rule-72-communications-concerning-a-lawyers-services-specific-rules): review advertising requirements.
- [Rule 7.3 — solicitation of clients](https://www.mass.gov/supreme-judicial-court-rules/rules-of-professional-conduct-rule-73-solicitation-of-clients): review the original letter's solicitation context and its proposed public use.
- [Rule 1.18 — duties to prospective clients](https://www.mass.gov/supreme-judicial-court-rules/rules-of-professional-conduct-rule-118-duties-to-prospective-client): review the contact form, warnings, and handling of information from people seeking representation.

These links are review references, not a certification of compliance. Counsel should check the rules and any amendments effective on the deployment date.
