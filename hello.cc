//#define BUILDING_NODE_EXTENSION
#include <node/node.h>
#include <node/node_buffer.h>

using namespace node;
using namespace v8;

void Method(const v8::FunctionCallbackInfo<v8::Value>& args) {
  v8::Isolate* isolate = args.GetIsolate();
  v8::HandleScope scope(isolate);
  v8::Local<v8::Object> return_buffer = node::Buffer::New( isolate,3).ToLocalChecked();
  char * data =  new char[4];
//  data = node::Buffer::Data(return_buffer);
    data[0] = 'a';
    data[1] = 'b';
    data[2] = 'c';
    data[3] = '\0';
    v8::Local<v8::Object> other_buffer = node::Buffer::New( isolate,data,3).ToLocalChecked();

  args.GetReturnValue().Set(other_buffer);
}

void init(v8::Local<v8::Object> target) {
  NODE_SET_METHOD(target, "hello", Method);
}

NODE_MODULE(binding, init);