# Label Organization Guide

This document provides a comprehensive guide to label usage in the repository, helping team members understand and apply labels consistently for better visual organization and issue triage.

## Label Categories

Labels are organized into the following categories to help with systematic issue management:

| Label Name | Category | Description |
|------------|----------|-------------|
| bug | Issue-Type | Something isn't working - reports of defects or errors in the application |
| enhancement | Issue-Type | Suggested improvements or new features to be added |
| documentation | Issue-Type | Issues related to documentation improvements or additions |
| feature | Issue-Type | New feature requests or development |
| question | Issue-Type | Questions from users or team members needing answers |
| task | Issue-Type | Specific tasks to be completed |
| wontfix | Issue-Type | Issues that will not be fixed |
| critical | Priority/Status | High priority issues requiring immediate attention |
| hotfix | Priority/Status | Urgent fixes for critical production issues |
| memory | Area | Issues related to memory usage, memory leaks, or memory management |
| context | Area | Issues related to context management and buffer operations |
| hooks | Area | Issues related to hooks, integrations, or event handlers |
| platform | Platform | Platform-specific issues and concerns |
| macOS | Platform | Issues specific to macOS platform |
| iOS | Platform | Issues specific to iOS platform |
| web | Platform | Issues specific to web platform |
| frontend | Area | Issues related to frontend/UI code and user interface |
| backend | Area | Issues related to backend/server code and APIs |
| testing | Area | Issues related to testing and test coverage |
| in-progress | Status | Issues currently being actively worked on |
| blocked | Status | Issues blocked by dependencies or external factors |
| needs-review | Status | Pull requests or code needing code review |
| needs-approval | Status | Changes requiring approval before merging |
| wip | Status | Work in progress - incomplete changes |
| waiting-on-decision | Status | Awaiting decision from stakeholders |
| good-first-issue | Priority/Status | Issues suitable for newcomers or beginners |
| help-wanted | Priority/Status | Issues that could use additional help from the community |

## Usage Guidelines

### Issue-Type Labels
Use these labels to classify the type of issue:

- **bug**: Apply to any reported defect, error, or unexpected behavior
- **enhancement**: Use for proposed improvements or feature additions
- **documentation**: Apply to documentation updates, corrections, or additions
- **feature**: Use for new feature development requests
- **question**: Use when asking questions about the project
- **task**: Use for specific, well-defined tasks to be completed
- **wontfix**: Apply when an issue will not be addressed

### Priority/Status Labels
Use these labels to indicate priority and urgency:

- **critical**: Reserve for issues that completely block functionality or cause data loss
- **hotfix**: Use for urgent production issues requiring immediate attention
- **blocked**: Apply when an issue cannot proceed due to dependencies
- **good-first-issue**: Mark issues suitable for new contributors

### Area Labels
Use these labels to identify the code area affected:

- **memory**: For issues related to memory management and allocation
- **context**: For issues involving context management and buffers
- **hooks**: For issues related to hooks and external integrations
- **frontend**: For UI and client-side code issues
- **backend**: For server-side and API issues
- **testing**: For testing and quality assurance issues

### Platform Labels
Use these labels for platform-specific issues:

- **macOS**: Issues specific to macOS operating system
- **iOS**: Issues specific to iOS platform
- **web**: Issues related to web browsers and web technologies
- **platform**: Use for multi-platform issues when specific labels don't apply

### Status Labels
Use these labels to track the state of work:

- **in-progress**: Work actively in progress on an issue/PR
- **blocked**: Waiting on something external to proceed
- **needs-review**: Ready for code review
- **needs-approval**: Requires stakeholder approval
- **wip**: Work in progress, incomplete changes
- **waiting-on-decision**: Awaiting decisions before proceeding

### Best Practices
1. Apply relevant labels to every issue and pull request
2. Use primary labels to best describe the issue
3. Combine multiple labels when an issue falls into multiple categories
4. Review and update labels as issues evolve in priority or state
5. Refer to this guide when adding new labels to maintain consistency

## Maintaining Labels

Labels should be kept in sync with actual issues in the repository. Periodically review:
- Unused labels that can be deprecated
- New labels that should be added based on emerging needs
- Label descriptions that need updating

This guide serves as a living document and should be updated as the label organization evolves.
