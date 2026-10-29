# Label Organization Guide

This guide documents all labels used in this repository, organized by category for better visual organization and easier issue triage.

## Label Categories

| Label Name | Category | Description |
|------------|----------|-------------|
| bug | issue-type | Something isn't working - indicates a bug or defect in the code |
| enhancement | issue-type | New feature or request - indicates a proposed improvement or new feature |
| question | issue-type | Further information is requested - indicates that more information is needed |
| wontfix | issue-type | This will not be worked on - indicates the issue will not be addressed |
| feature | issue-type | Tracks feature implementation work |
| task | issue-type | A generic task that doesn't fit other categories |
| critical | performance | Indicates a critical priority issue requiring immediate attention |
| memory | performance | Related to memory usage, allocation, or memory-related issues |
| context | performance | Related to context management, context buffer, or context-related features |
| hooks | performance | Related to hooks functionality and execution |
| platform | platform | Related to platform-specific implementations or considerations |
| macOS | platform | Specific to macOS platform issues or features |
| iOS | platform | Specific to iOS platform issues or features |
| web | platform | Specific to web platform issues or features |
| frontend | area | Related to frontend code, UI, or user-facing functionality |
| backend | area | Related to backend code, APIs, or server-side functionality |
| testing | area | Related to testing, test cases, or testing infrastructure |
| documentation | area | Related to documentation improvements or additions |
| in-progress | status | The issue is currently being worked on |
| blocked | status | The issue cannot be resolved due to blocking dependencies |
| needs-review | status | The issue requires review before proceeding |
| needs-approval | status | The issue requires approval from stakeholders before proceeding |
| wip | status | Work in progress - the issue is actively being worked on |
| waiting-on-decision | status | Waiting for a decision or clarification before proceeding |
| hotfix | status | Indicates a hotfix is being worked on or deployed |
| good-first-issue | status | A beginner-friendly issue suitable for new contributors |
| help-wanted | status | The issue needs additional help from the community |

## Usage Guidelines

### Issue-Type Labels
- Use **bug** when reporting defects, errors, or unexpected behavior
- Use **enhancement** for new features or significant improvements
- Use **question** when asking clarifying questions or seeking information
- Use **wontfix** when declining to implement a feature (ensure this is documented)
- Use **feature** to track the implementation of a specific feature
- Use **task** for miscellaneous tasks that don't fit other categories

### Platform Labels
- Use platform-specific labels (**macOS**, **iOS**, **web**) when the issue is specific to that platform
- Use **platform** as a general label for platform-related discussions or cross-platform considerations
- Always include the specific platform label rather than just **platform** when applicable

### Area Labels
- Use **frontend** for issues related to the user interface, client-side code, or browser-based functionality
- Use **backend** for server-side code, APIs, database operations, or infrastructure
- Use **testing** for test-related issues, coverage concerns, or testing infrastructure
- Use **documentation** for improvements to code, user, or developer documentation
- Use **memory**, **context**, **hooks** for specific technical areas as appropriate

### Status Labels
- Use **in-progress** when work has started on the issue
- Use **blocked** when the issue cannot proceed due to dependencies or external factors
- Use **needs-review** when the work is complete and ready for code or design review
- Use **needs-approval** when stakeholder approval is required before proceeding
- Use **wip** for active development work in progress
- Use **waiting-on-decision** when clarification or decisions are needed
- Use **hotfix** when the issue is related to a hotfix deployment or emergency fix
- Use **good-first-issue** for beginner-friendly issues (typically small, well-scoped tasks)
- Use **help-wanted** when additional contributors are needed

### Best Practices
1. **Combine labels appropriately**: Use multiple labels to fully describe an issue (e.g., `bug + memory + critical` for a critical memory-related bug)
2. **Be specific**: Prefer specific platform labels over generic ones when applicable
3. **Update status**: Change status labels as the issue progresses through the workflow
4. **Consistency**: Apply labels consistently across similar issues for easier triage
5. **Documentation**: Refer to this guide when creating or updating labels on issues

### Label Color Scheme
Labels are organized by their primary category to provide visual consistency:
- **Issue-type labels**: Orange/Pink colors for easy identification of issue types
- **Platform labels**: Blue colors to highlight platform-specific concerns
- **Area labels**: Green colors for domain-specific issues
- **Status labels**: Gray/Yellow colors to indicate workflow state

This organizational structure ensures that:
- Issues can be quickly filtered and sorted by type, platform, or area
- Team members can efficiently triage based on their area of expertise
- Visual patterns emerge that help prioritize and manage workload
- New contributors can understand the labeling system through the guide
