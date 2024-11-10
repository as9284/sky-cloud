import React from "react";

export const Privacy = () => {
  return (
    <>
      <div className="relative w-full min-h-[50dvh] m-auto bg-cover flex flex-col justify-center items-center select-none text-center">
        <div
          style={{
            backgroundColor: "#ffffff",
            opacity: "0.4",
            backgroundImage:
              "radial-gradient(#000000 0.5px, transparent 0.5px), radial-gradient(#000000 0.5px, #ffffff 0.5px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0,10px 10px",
          }}
          className="absolute inset-0 w-full h-full z-0"
        />
        <div className="relative w-full flex flex-col justify-center items-center p-8 z-10">
          <p className="feature-tag">Privacy</p>
          <h2 className="w-full text-4xl md:text-5xl font-bold text-neutral-900 mb-4 md:mb-8">
            Your privacy matters.
          </h2>
          <div className="relative w-full lg:w-1/2 h-[34rem] bg-white border-[3px] border-neutral-900 drop-shadow-md flex flex-col justify-start items-center p-4 overflow-y-auto text-left">
            <p className="font-bold">
              At Sky Cloud, we prioritize the security and privacy of your data.
              Our cloud storage solution is designed with advanced privacy
              features to ensure that your files remain protected at all times.
            </p>
            <br />
            <h3 className="w-full font-bold">1. End-to-End Encryption</h3>
            <p>
              All files stored on our platform are protected with
              industry-standard encryption both in transit and at rest. Only you
              have access to your encryption keys, ensuring that no one else can
              view your data, not even us.
            </p>
            <br />
            <h3 className="w-full font-bold">2. Zero-Knowledge Privacy</h3>
            <p>
              We have a zero-knowledge policy, meaning we do not have access to
              your files or data. You are the only person who can view or
              decrypt your content, providing total privacy.
            </p>
            <br />
            <h3 className="w-full font-bold">
              3. Multi-Factor Authentication (MFA)
            </h3>
            <p>
              Enhance your account security by enabling multi-factor
              authentication (MFA). This adds an extra layer of protection,
              requiring both your password and a second verification method,
              such as a code sent to your phone or email.
            </p>
            <br />
            <h3 className="w-full font-bold">4. Granular Access Control</h3>
            <p>
              With our advanced sharing and permission settings, you can control
              exactly who can view, edit, or share your files. Share files
              securely with specific users and set expiration dates for links to
              protect sensitive content.
            </p>
            <br />
            <h3 className="w-full font-bold">5. Data Anonymization</h3>
            <p>
              We anonymize all personal data used for internal analysis and
              service improvement. Any data collected is used in aggregate,
              ensuring that your personal identity is always protected.
            </p>
            <br />
            <h3 className="w-full font-bold">6. Secure File Sharing</h3>
            <p>
              Share files with confidence, knowing that you can set expiration
              dates, password-protect links, and manage access permissions.
              Files are shared only with the people you choose, ensuring full
              control over your content.
            </p>
            <br />
            <h3 className="w-full font-bold">7. Regular Security Audits</h3>
            <p>
              We conduct regular security audits and vulnerability assessments
              to ensure that our infrastructure remains secure and up-to-date
              with the latest privacy protection standards.
            </p>
            <br />
            <h3 className="w-full font-bold">8. Data Recovery and Backup</h3>
            <p>
              Your files are securely backed up and can be restored if needed.
              We ensure your data is safe and easily recoverable in case of
              unexpected events, while maintaining strict privacy during the
              process.
            </p>
            <br />
            <h3 className="w-full font-bold">
              9. Compliance with Privacy Standards
            </h3>
            <p>
              We comply with major privacy regulations and standards, including
              GDPR, HIPAA, and SOC 2, ensuring that we meet the highest levels
              of privacy protection.
            </p>
            <br />
            <h3 className="w-full font-bold">
              10. Transparent Privacy Settings
            </h3>
            <p>
              Our intuitive settings allow you to manage your privacy
              preferences easily. You can view and adjust your data sharing and
              security preferences at any time, giving you full control over
              your data.
            </p>
            <br />
            <p className="font-bold">
              Your privacy is our top priority, and we continuously update our
              security measures to keep your files safe and private.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
