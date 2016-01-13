var LimitedSizeQueue_1 = require('./queue/LimitedSizeQueue');
exports.LimitedSizeQueue = LimitedSizeQueue_1.LimitedSizeQueue;
var LocalStorageLogger_1 = require('./loggers/LocalStorageLogger');
exports.LocalStorageLogger = LocalStorageLogger_1.LocalStorageLogger;
var ConsoleLogger_1 = require('./loggers/ConsoleLogger');
exports.ConsoleLogger = ConsoleLogger_1.ConsoleLogger;
var NullLogger_1 = require('./loggers/NullLogger');
exports.NullLogger = NullLogger_1.NullLogger;
var DefaultFormatter_1 = require('./formatters/DefaultFormatter');
exports.DefaultFormatter = DefaultFormatter_1.DefaultFormatter;
var LogBootstrapper_1 = require('./LogBootstrapper');
exports.LogBootstrapper = LogBootstrapper_1.LogBootstrapper;
var LogBootstrapper_2 = require('./LogBootstrapper');
var defaultBootstrapper = new LogBootstrapper_2.LogBootstrapper();
function default_1(config) {
    return defaultBootstrapper.bootstrap(config);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxTTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxpQ0FBK0IsMEJBQTBCLENBQUM7QUFBbEQsK0RBQWtEO0FBRzFELG1DQUFpQyw4QkFBOEIsQ0FBQztBQUF4RCxxRUFBd0Q7QUFDaEUsOEJBQTRCLHlCQUF5QixDQUFDO0FBQTlDLHNEQUE4QztBQUN0RCwyQkFBeUIsc0JBQXNCLENBQUM7QUFBeEMsNkNBQXdDO0FBRWhELGlDQUErQiwrQkFBK0IsQ0FBQztBQUF2RCwrREFBdUQ7QUFFL0QsZ0NBQThCLG1CQUFtQixDQUFDO0FBQTFDLDREQUEwQztBQUdsRCxnQ0FBOEIsbUJBQW1CLENBQUMsQ0FBQTtBQUVsRCxJQUFNLG1CQUFtQixHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQ2xELG1CQUF5QixNQUF1QztJQUM5RCxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFGRDsyQkFFQyxDQUFBIiwiZmlsZSI6IkxTTC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7SVF1ZXVlQ29uZmlndXJhdGlvbn0gZnJvbSAnLi9xdWV1ZS9JUXVldWVDb25maWd1cmF0aW9uJztcbmV4cG9ydCB7TGltaXRlZFNpemVRdWV1ZX0gZnJvbSAnLi9xdWV1ZS9MaW1pdGVkU2l6ZVF1ZXVlJztcblxuZXhwb3J0IHtJTG9jYWxTdG9yYWdlTG9nZ2VyQ29uZmlndXJhdGlvbn0gZnJvbSAnLi9sb2dnZXJzL0lMb2NhbFN0b3JhZ2VMb2dnZXJDb25maWd1cmF0aW9uJztcbmV4cG9ydCB7TG9jYWxTdG9yYWdlTG9nZ2VyfSBmcm9tICcuL2xvZ2dlcnMvTG9jYWxTdG9yYWdlTG9nZ2VyJztcbmV4cG9ydCB7Q29uc29sZUxvZ2dlcn0gZnJvbSAnLi9sb2dnZXJzL0NvbnNvbGVMb2dnZXInO1xuZXhwb3J0IHtOdWxsTG9nZ2VyfSBmcm9tICcuL2xvZ2dlcnMvTnVsbExvZ2dlcic7XG5cbmV4cG9ydCB7RGVmYXVsdEZvcm1hdHRlcn0gZnJvbSAnLi9mb3JtYXR0ZXJzL0RlZmF1bHRGb3JtYXR0ZXInO1xuXG5leHBvcnQge0xvZ0Jvb3RzdHJhcHBlcn0gZnJvbSAnLi9Mb2dCb290c3RyYXBwZXInO1xuXG5pbXBvcnQge0lMb2NhbFN0b3JhZ2VMb2dnZXJDb25maWd1cmF0aW9ufSBmcm9tICcuL2xvZ2dlcnMvSUxvY2FsU3RvcmFnZUxvZ2dlckNvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHtMb2dCb290c3RyYXBwZXJ9IGZyb20gJy4vTG9nQm9vdHN0cmFwcGVyJztcbmltcG9ydCB7SUxvZ30gZnJvbSAnLi9JTG9nJztcbmNvbnN0IGRlZmF1bHRCb290c3RyYXBwZXIgPSBuZXcgTG9nQm9vdHN0cmFwcGVyKCk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29uZmlnOklMb2NhbFN0b3JhZ2VMb2dnZXJDb25maWd1cmF0aW9uKSA6IElMb2cge1xuICByZXR1cm4gZGVmYXVsdEJvb3RzdHJhcHBlci5ib290c3RyYXAoY29uZmlnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
