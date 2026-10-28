# Migration Guide for Pending Features

This guide documents pending pull requests that introduce new features, configurations, or breaking changes. Review this guide before upgrading to the next version.

---

## PR #23 - docs: add comprehensive label guide (closes #13)

### Title
docs: add comprehensive label guide (closes #13)

### Summary of Changes
This PR introduces comprehensive documentation for all 27 repository labels, organized into 7 logical categories:
- **issue-type**: Categories for the type of issue
- **priority**: Priority levels for issues
- **platform**: Platform-specific labels (macOS, Linux, Windows)
- **area**: Feature area labels (core, tools, api)
- **status**: Status lifecycle labels
- **contribution**: Contribution type labels
- **documentation**: Documentation-related labels

### Key Changes
- **New Configuration**: None
- **New Environment Variables**: None
- **Breaking Changes**: None

### Installation / Usage Instructions
- Review the new `docs/LABEL_COLORS.md` file for complete label reference
- Labels are now organized with clear visual hierarchy
- Follow the new labeling guidelines when creating or updating issues

---

## PR #16 - HOTFIX: Critical memory optimization for issues #49 and #46

### Title
HOTFIX: Critical memory optimization for issues #49 and #46

### Summary of Changes
Critical memory optimization changes addressing severe context management and JavaScript heap exhaustion issues affecting Claude Code v1.0.72.

### Critical Issues Addressed
- **Issue #49**: Context auto-compact functionality stuck at 0% completion (macOS)
- **Issue #46**: JavaScript heap out of memory during large MCP operations

### New Configuration / Environment Variables

#### Memory Configuration
```yaml
# Context Buffer Management
claude.context_buffer_limit: "10MB"  # Default context buffer size
claude.context_pruning_threshold: "80%"  # Auto-prune at 80% of buffer

# Streaming Configuration
claude.streaming.chunk_size: "1MB"  # Chunk size for large operations
claude.streaming.enabled: true  # Enable streaming for MCP operations

# Monitoring
claude.memory_monitoring.enabled: true
claude.memory_alert_threshold: "90%"
```

### Installation / Usage Instructions

#### Prerequisites
- Claude Code v1.0.72 or later
- Updated context management configuration

#### Migration Steps
1. Update your configuration file with new memory settings
2. Verify context buffer limits are appropriate for your use case
3. Test with large MCP operations to confirm streaming works correctly
4. Monitor memory usage with the new monitoring tools

#### Usage Examples
```bash
# Set context buffer limit
claude config set context_buffer_limit 10MB

# Enable automatic pruning
claude config set context_pruning_threshold 80%

# Reset context if needed
claude /memory-reset
```

---

## PR #10 - Add label organization guide for visual organization

### Title
Add label organization guide for visual organization

### Summary of Changes
Comprehensive label documentation establishing a clear and organized labeling system with:
- Complete inventory of all 27 repository labels
- Categorization by type and purpose
- Detailed descriptions for each label
- Usage guidelines and best practices

### Key Changes
- **New Documentation**: `docs/LABEL_COLORS.md`
- **Visual Organization**: Enhanced issue organization through consistent labeling
- **Organization Guide**: Structured categorization for easy reference

### New Configuration / Environment Variables
None - This is a documentation-only PR

### Installation / Usage Instructions
- Access the label guide at `docs/LABEL_COLORS.md`
- Review the complete inventory and categorization
- Follow best practices for label consistency
- Use the visual improvement features for better issue triage

---

## Migration Summary

### Recommended Upgrade Path
1. **Review all PRs**: Familiarize yourself with the changes in each pending PR
2. **PR #23** (Label Guide): Review first to understand new labeling system
3. **PR #10** (Label Organization): Complement to PR #23, update your workflows
4. **PR #16** (Memory Hotfix): Critical - apply for memory stability

### Potential Breaking Changes
- **None**: All pending PRs are either documentation updates or bug fixes
- No breaking configuration changes expected
- Backward compatible with existing configurations

### Configuration Changes Summary
| Feature | New Configuration | Default Value |
|---------|-------------------|---------------|
| Context Buffer Limit | `claude.context_buffer_limit` | 10MB |
| Context Pruning Threshold | `claude.context_pruning_threshold` | 80% |
| Streaming Chunk Size | `claude.streaming.chunk_size` | 1MB |
| Memory Monitoring | `claude.memory_monitoring.enabled` | true |

### Next Steps
- Review detailed documentation in each PR
- Test memory optimizations if upgrading
- Adopt new labeling conventions
- Monitor for any issues after migration

---
*Last Updated: Based on current open PRs*
