// Copyright (c) 2024 Baidu, Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package qianfan

type Option func(*Options)
type Options struct {
	Model    *string
	Endpoint *string
}

// 用于模型类对象设置使用的模型
func WithModel(model string) Option {
	return func(options *Options) {
		options.Model = &model
	}
}

// 用于模型类对象设置使用的 endpoint
func WithEndpoint(endpoint string) Option {
	return func(options *Options) {
		options.Endpoint = &endpoint
	}
}

// 将多个 Option 转换成最终的 Options 对象
func makeOptions(options ...Option) *Options {
	option := Options{}
	for _, opt := range options {
		opt(&option)
	}
	return &option
}
