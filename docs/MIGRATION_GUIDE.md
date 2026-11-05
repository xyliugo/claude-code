# Migration Guide for Pending Features

This guide provides comprehensive documentation for all open pull requests in the repository, helping users understand pending features, configuration changes, and migration paths.

---

## PR #16: HOTFIX: Critical memory optimization for issues #49 and #46

### PR Title and Number
**HOTFIX: Critical memory optimization for issues #49 and #46** (PR #16)

### Summary of Changes
This hotfix implements critical memory optimization changes to address severe context management and JavaScript heap exhaustion issues affecting Claude Code v1.0.72. The hotfix addresses two critical issues:
- **Issue #49**: Context auto-compact functionality was stuck at 0% completion, making the tool unusable on macOS platforms
- **Issue #46**: JavaScript heap out of memory crashes during large MCP operations caused complete application failures

The PR includes:
- Added comprehensive memory optimization guide (`docs/MEMORY_OPTIMIZATION.md`)
- Documented context buffer management strategies
- Added configuration options for memory thresholds
- Implemented streaming optimization and progressive cleanup mechanisms

### New Configuration and Environment Variables
The following configuration options have been implemented:

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

**Configuration Details**:
- `contextBufferLimit`: Maximum context buffer size (default: 10MB)
- `autoCompactThreshold`: Auto-pruning threshold percentage (default: 80%)
- `streamingChunkSize`: Size of chunks for streaming data processing (default: 1MB)
- `gcOptimization`: Enable garbage collection optimization (default: true)

### Installation and Usage Instructions

**Installation**:
1. Pull the hotfix branch or wait for the merge to main
2. Update your configuration with the new memory settings if needed
3. Restart the application to apply changes

**Usage**:
- The `/memory-reset` command can be used to manually reset the context buffer
- Context auto-compact now works properly on macOS platforms
- Large MCP operations will use streaming data processing to prevent heap exhaustion
- Garbage collection optimization prevents unbounded memory growth

**Migration Steps**:
1. No breaking changes - this is a backward-compatible hotfix
2. Existing configurations will automatically use the new defaults
3. Users can override defaults in their configuration files
4. Monitor memory usage after deployment to ensure stability

---

## PR #10: Add label organization guide for visual organization

### PR Title and Number
**Add label organization guide for visual organization** (PR #10)

### Summary of Changes
This PR adds comprehensive label organization documentation to improve visual organization and make it easier for contributors to understand and use labels consistently across issues and pull requests. The documentation covers all 27 existing labels in the repository.

The PR includes:
- Added `docs/LABEL_COLORS.md` with a complete label organization guide
- Documented all 27 existing labels in the repository
- Organized labels by category: issue-type, area, platform, status, performance, and priority
- Included usage guidelines for each label category
- Provided clear descriptions for each label's purpose and appropriate use cases

### New Configuration and Environment Variables
No new configuration or environment variables are introduced. This PR adds documentation to `docs/LABEL_COLORS.md` with:
- Complete inventory of all 27 labels
- Labels organized by category: issue-type, area, platform, status, performance, and priority
- Clear descriptions for each label
- Usage guidelines for each label category

### Installation and Usage Instructions

**Installation**:
1. Pull the feature branch or wait for the merge to main
2. The documentation will be available at `docs/LABEL_COLORS.md`

**Usage**:
- Refer to `docs/LABEL_COLORS.md` for label usage guidelines
- Use the label categories to understand when and why to apply each label
- Apply labels consistently across issues and pull requests for better organization

**Migration Steps**:
1. No breaking changes - this is purely documentation
2. Existing label usage remains valid
3. Team members can now follow the new guidelines for consistent labeling

---

## General Notes

### Compatible Versions
- Claude Code v1.0.72 and later
- All pending features are backward compatible

### Support
For questions about these pending features, please:
1. Review the relevant PR documentation above
2. Check the existing documentation in the `docs/` folder
3. Open a new issue if you encounter problems

### Key Resources
- **Memory Optimization**: See `docs/MEMORY_OPTIMIZATION.md` for detailed memory management guides
- **Label Guide**: See `docs/LABEL_COLORS.md` for comprehensive label documentation
- **Issue Reports**: See `reports/ISSUE_ANALYSIS.md` for detailed analysis
- **Integration Plan**: See `reports/PR_INTEGRATION_PLAN.md` for merge strategy
- **Configuration**: See `CHANGELOG-GENERATED.md` for configuration options

### Review Status
- PR #16: Ready for review - critical hotfix priority
- PR #10: Ready for review - documentation improvement
