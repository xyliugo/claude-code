# Migration Guide for Pending Features

This guide provides detailed information about all open pull requests that contain pending features, configuration changes, or migration requirements.

## PR Overview

This migration guide analyzes **2 open pull requests** that require attention.

---

## PR #16: HOTFIX: Critical memory optimization for issues #49 and #46

### Summary
Critical memory optimization hotfix addressing severe context management and JavaScript heap exhaustion issues affecting Claude Code v1.0.72.

### Critical Issues Addressed
- **Issue #49**: Context auto-compact functionality was stuck at 0% completion, making the tool unusable on macOS platforms
- **Issue #46**: JavaScript heap out of memory crashes during large MCP operations caused complete application failures

### Changes Overview
- Added comprehensive memory optimization guide (`docs/MEMORY_OPTIMIZATION.md`)
- Documented context buffer management strategies
- Added configuration options for memory thresholds
- Implements progressive context cleanup and streaming optimization

### New Configuration Options

The following configuration options are now available in `claude-code.json`:

```json
{
  "memory": {
    "contextBufferLimit": "10MB",
    "autoCompactThreshold": 0.8,
    "streamingChunkSize": "1MB",
    "gcOptimization": true
  }
}
```

#### Configuration Details

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| contextBufferLimit | string | "10MB" | Maximum size of context buffer before pruning |
| autoCompactThreshold | number | 0.8 | Threshold (0-1) at which automatic context compaction triggers |
| streamingChunkSize | string | "1MB" | Size of chunks for streaming data processing |
| gcOptimization | boolean | true | Enable garbage collection optimization |

### Installation and Usage

#### Installation
Ensure you have the latest version of Claude Code installed:

```bash
# Update to v1.0.72 or later
npm install -g @xyliugo/claude-code@latest
```

#### Configuration
Add the following to your `claude-code.json` configuration file:

```json
{
  "memory": {
    "contextBufferLimit": "10MB",
    "autoCompactThreshold": 0.8,
    "streamingChunkSize": "1MB",
    "gcOptimization": true
  }
}
```

#### Usage
After configuration:
1. Restart Claude Code application
2. Verify memory settings in the UI under Settings > Memory
3. Use the `/memory-reset` command to manually reset context if needed

### Environment Variables

No specific environment variables required for memory optimization features.

### Breaking Changes

- None. This is a backwards-compatible hotfix.

### Migration Steps
1. Update to Claude Code v1.0.72 or later
2. Review existing `claude-code.json` configuration
3. Add memory configuration section if missing
4. Restart the application

### Related Issues
- Addresses: #49, #46
- Tracked in: #38

---

## PR #10: Add label organization guide for visual organization

### Summary
Comprehensive label organization documentation to improve visual organization and make it easier for contributors to understand and use labels consistently across issues and pull requests.

### Changes Overview
- Added `docs/LABEL_COLORS.md` with complete label organization guide
- Documented all 27 existing labels in the repository
- Organized labels by category: issue-type, area, platform, status, performance, and priority
- Included usage guidelines for each label category
- Provided clear descriptions for each label's purpose

### Label Categories

#### Issue-Type Labels
| Label | Color | Usage |
|-------|-------|-------|
| bug | d73a4a | Something isn't working |
| enhancement | a2eeef | New feature or request |
| wontfix |ffffff | This will not be worked on |
| question |d876e3 | Further information is requested |

#### Platform Labels
| Label | Color | Usage |
|-------|-------|-------|
| macOS | edededed | macOS-specific issues |
| iOS | edededed | iOS-specific issues |
| web | edededed | Web platform issues |
| platform | edededed | Platform-related issues |

#### Area Labels
| Label | Color | Usage |
|-------|-------|-------|
| memory | edededed | Memory-related issues |
| context | edededed | Context management issues |
| hooks | edededed | Hook-related issues |

#### Status Labels
| Label | Color | Usage |
|-------|-------|-------|
| critical | edededed | Critical priority issues |
| in-progress | edededed | Currently being worked on |
| blocked | edededed | Blocked on other issues |
| needs-review | edededed | Requires review |
| needs-approval | edededed | Requires approval |
| wip | edededed | Work in progress |
| waiting-on-decision | edededed | Waiting for decision |

#### Workflow Labels
| Label | Color | Usage |
|-------|-------|-------|
| feature | edededed | Feature implementation |
| task | edededed | Task or to-do |
| frontend | edededed | Frontend work |
| backend | edededed | Backend work |
| testing | edededed | Testing related |

#### Priority Labels
| Label | Color | Usage |
|-------|-------|-------|
| hotfix | edededed | Urgent hotfix required |
| good-first-issue | edededed | Good for new contributors |
| help-wanted | edededed | Help needed from community |

### Installation and Usage

#### Viewing Labels
Labels are automatically applied to issues and pull requests. View them in GitHub UI.

#### Applying Labels
When creating or editing an issue, select appropriate labels from the label picker.

#### Best Practices
1. Use **bug** for actual problems
2. Use **critical** for urgent issues
3. Use platform labels (macOS, iOS, web) for platform-specific issues
4. Use status labels (in-progress, blocked, needs-review) appropriately
5. Document label usage in `docs/LABEL_COLORS.md`

### Breaking Changes

- None. This is purely documentation.

### Migration Steps
1. Review existing issues and their labels
2. Ensure consistent label usage
3. Update team guidelines based on `docs/LABEL_COLORS.md`

### Related Issues
- Fixes: #34
- Related: #13 (label organization tracking)

---

## Configuration Summary

### Recommended Configuration Changes

| Feature | Required | Priority | Notes |
|---------|----------|----------|-------|
| Memory optimization | Optional | High | Recommended for all users |
| Label organization | N/A | Medium | Documentation only |

### Version Compatibility

- **PR #16**: Requires Claude Code v1.0.72+
- **PR #10**: No version requirements

### Testing Recommendations

1. Test memory optimization with large MCP operations
2. Verify context auto-compact functionality
3. Check streaming data processing with large datasets
4. Review label consistency across issues

---

## Support and Feedback

For questions about migration or configuration:
- Open an issue with the appropriate labels
- Refer to `docs/MEMORY_OPTIMIZATION.md` for memory-related questions
- Refer to `docs/LABEL_COLORS.md` for label usage questions
