# Security policy

## Supported versions

Only the latest default-branch static site is supported. Older deployments and unmaintained forks are unsupported.

## Reporting a vulnerability

Report vulnerabilities privately through the repository's GitHub Security Advisory **Report a vulnerability** flow or a private maintainer contact. Do not disclose vulnerabilities, personal data, credentials, or proofs of concept through public GitHub issues.

Include affected versions, reproduction steps, impact, and suggested mitigation. Avoid accessing data that is not your own or disrupting service. Maintainers should validate reports, rotate affected credentials, and coordinate disclosure after remediation.

Security expectations include no hidden collection of contact-form data, clear notice before opening email clients, safe URL encoding, strong deployment security headers, pinned and reviewed dependencies, least-privilege CI credentials, and a fresh review before adding authentication, APIs, storage, analytics, or third-party scripts.

# Security & Privacy Remediation Backlog

The standard scan found no validated vulnerabilities or privacy issues in the reviewed current-tree scope. The site is static, the contact form prepares an encoded `mailto:` message locally, and there is no authentication, database, server API, telemetry pipeline, or sensitive storage boundary in the implementation.
