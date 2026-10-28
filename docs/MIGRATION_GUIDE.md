# Migration Guide for Pending Features

This document outlines the migration path and implementation details for all open pull requests in the repository.

---

## PR #23: docs: add comprehensive label guide (closes #13)

### Summary
This PR creates comprehensive documentation for all 27 repository labels, organizing them into structured categories to improve visual organization and streamline issue triage workflows.

### Changes
- Created `docs/LABEL_COLORS.md` with complete label documentation
- Organized labels into 7 categories: issue-type, priority, platform, area, status, contribution, documentation
- Added clear descriptions and "when to use" guidance for each label
- Included status lifecycle diagram and usage guidelines
- Added label color reference table

### New Configuration/Environment Variables
None - This is a documentation-only PR.

### Installation/Usage Instructions
1. Review the label guide at `docs/LABEL_COLORS.md`
2. Apply appropriate labels to new issues and pull requests
3. Follow the categorization guidelines for consistent labeling
4. Reference the lifecycle diagram for issue status transitions

---

## PR #16: HOTFIX: Critical memory optimization for issues #49 and #46

### Summary
This hotfix implements critical memory optimization changes to address severe context management and JavaScript heap exhaustion issues affecting Claude Code v1.0.72.

### Critical Issues Addressed
- **Issue #49**: Context auto-compact functionality stuck at 0% completion on macOS platforms
- **Issue #46**: JavaScript heap out of memory crashes during large MCP operations

### Changes
- Added comprehensive memory optimization guide (`docs/MEMORY_OPTIMIZATION.md`)
- Documented context buffer management strategies
- Implemented memory threshold configurations

### New Configuration/Environment Variables
- `CLAUDE_CONTEXT_BUFFER_LIMIT`: Default 10MB
- `CLAUDE_CONTEXT_PRUNING_THRESHOLD`: 80% (automatic context cleanup)
- `CLAUDE_STREAMING_CHUNK_SIZE`: 1MB for MCP operations
- `CLAUDE_GARBAGE_COLLECTION_ENABLED`: true

### Installation/Usage Instructions
1. Clone or update repository from `hotfix/memory-optimization-v1.0.72` branch
2. Environment variables are automatically applied when starting Claude Code
3. Manual memory reset available via `/memory-reset` command
4. Monitor memory usage via built-in logging (see `docs/MEMORY_OPTIMIZATION.md`)

### Breaking Changes
None - This is a bug fix that improves stability.

### Compatibility
- Minimum supported version: v1.0.72
- Tested on: macOS, Linux, Windows

---

## PR #10: Add label organization guide for visual organization

### Summary
This PR introduces comprehensive label documentation for the repository, establishing a clear and organized labeling system with complete inventory of all 27 repository labels.

### Changes
- Created `docs/LABEL_COLORS.md` with complete guide to label organization
- Documented all 27 repository labels
- Organized labels by category (issue-type, platform, area, status, priority, contribution, documentation)
- Provided usage guidelines for each label category

### New Configuration/Environment Variables
None - This is a documentation-only PR.

### Installation/Usage Instructions
1. Review the label guide at `docs/LABEL_COLORS.md`
2. Apply labels consistently across issues and pull requests
3. Use the guide for team onboarding and process alignment

### Breaking Changes
None - This is a documentation-only PR.

### Compatibility
Compatible with all existing issues and pull requests.

---

## Migration Recommendations

### For Users
1. Update to v1.0.72 to receive memory optimization fixes from PR #16
2. Review new label organization in PR #23/PR #10 for better issue tracking
3. Monitor memory usage with new optimization features

### For Developers
1. Follow new label guidelines when creating issues
2. Use memory optimization configurations for large MCP operations
3. Reference label documentation for consistent workflow

### Platform-Specific Considerations
- **macOS**: Priority upgrade due to context auto-compact issue (#49)
- **Linux**: Memory optimizations apply across all platforms
- **Windows**: General stability improvements included

---

## Related Documentation
- `docs/MEMORY_OPTIMIZATION.md`: Comprehensive memory management guide
- `docs/LABEL_COLORS.md`: Complete label organization guide

---

## Status
- **PR #16**: Ready for merge (addresses critical memory issues)
- **PR #23**: Ready for merge (label documentation)
- **PR #10**: Ready for merge (label documentation)

**Note**: PR #23 and PR #10 are complementary label documentation PRs and may be merged together or sequentially.
